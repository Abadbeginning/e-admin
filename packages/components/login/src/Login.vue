<template>
  <div class="ea-login">
    <div class="_main">

      <img :src="logo" class="_logo"/>

      <el-menu
        mode="horizontal"
        :default-active="login.type"
        @select="type => login.type = type">
        <el-menu-item
          v-for="item in types"
          :key="item.index"
          :index="item.index">
          {{ item.label }}
        </el-menu-item>
      </el-menu>

      <div class="_form">
        <el-form v-if="login.type === 'user'" ref="user">
          <el-form-item>
            <el-input
              v-model="login.user"
              placeholder="用户名/手机号"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="login.pwd"
              placeholder="密码"
              :type="showPassword ? 'text' : 'password'"
              @keyup.native.enter="submit"
            >
              <el-switch
                v-model="showPassword"
                slot="suffix"
              />
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              :disabled="!login.user || !login.pwd"
              @click="submit"
            >
              登 录
            </el-button>
          </el-form-item>
        </el-form>
        <el-form v-else-if="login.type === 'mobile'" ref="mobile">
          <el-form-item>
            <el-input
              v-model="login.mobile"
              placeholder="手机号码"
            />
          </el-form-item>
          <el-form-item>
            <el-row :gutter="15">
              <el-col :span="15">
                <el-input
                  v-model="login.code"
                  placeholder="验证码"
                />
              </el-col>
              <el-col :span="9">
                <el-button
                  :disabled="countdown > 0"
                  @click="sendCode">
                  {{ countdown > 0 ? `${countdown} s` : '获取验证码' }}
                </el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submit"
              :disabled="!isSuccessMobile || !login.code">
              登 录
            </el-button>
          </el-form-item>
        </el-form>
        <p class="text-minor text-left">{{ tips }}</p>
      </div>
    </div>
    <div class="_footer">
      {{ copyright }}
    </div>
  </div>
</template>
<script>
  import logo from '../../../assets/logo.svg';
  import Utils from '../../../utils/index';

  export default {
    name: 'EaLogin',
    props: {
      copyright: {
        type: String,
        default: 'Copyright ©2019 asseek.com, All Rights Reserved.',
      },
      tips: {
        type: String,
        default: '',
      },
      logo: {
        type: String,
        default: logo,
      },
    },
    watch: {},
    data() {
      return {
        types: [
          {
            label: '账号密码登录',
            index: 'user',
          },
          {
            label: '手机号登录',
            index: 'mobile',
          },
        ],
        login: {
          type: 'user',
          user: '',
          pwd: '',
          mobile: '',
          code: '',
        },
        showPassword: false,
        countdown: 0,
      };
    },
    computed: {
      isSuccessMobile() {
        return Utils.reg.test.mobile.test(this.login.mobile);
      },
    },
    methods: {
      submit() {
        this.validation(() => {
          this.$emit('submit', Utils.cloneDeep(this.login));
        });
      },
      sendCode() {
        if (!this.countdown) {
          if (this.isSuccessMobile) {
            this.$emit('send-code', this.login.mobile, () => {
              this.countdown = 60;
              this.countdownSubtract();
            });
          } else {
            this.$message.warning('请填写正确手机号码');
          }
        }
      },
      countdownSubtract() {
        if (this.countdown > 0) {
          setTimeout(() => {
            this.countdown -= 1;
            this.countdownSubtract();
          }, 1000);
        }
      },
      validation(callback) {
        let error = [];
        if (this.login.type === 'user') {
          if (!this.login.user.length) {
            error.push('请输入正确登录名');
          }
          if (!this.login.pwd) {
            error.push('请输入密码');
          }
        }
        if (error.length) {
          this.$message({
            showClose: true,
            dangerouslyUseHTMLString: true,
            message: error.reduce((html, err) => `${html}${err}<br/>`, ''),
            type: 'warning',
            duration: 3500,
          });
        } else {
          callback();
        }
      },
    },
  };
</script>