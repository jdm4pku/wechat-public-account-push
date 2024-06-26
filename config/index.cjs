/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxec2ed91a4c378470',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '43057723daf30dac91d8d8bdc73c5089',

  PROVINCE: '湖北',
  CITY: '武汉',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'olX526m81jo7LMgMWLohh1SE-LOY',
      // id: 'olX526s6iPRuaaPMBFQeun5K63So',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'niFkJ30APsgTCPcclR5hzORjSFMPtOUqBeraJK-CEhU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-14',
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-12-02' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'RQp9sdHYgzfyjkAWoaE-V2cW-Nz7XZ5viEn7A2pNm3c',

  CALLBACK_USERS: [
    {
      name: '宝宝',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      // id: 'olX526m81jo7LMgMWLohh1SE-LOY',
      id: 'olX526s6iPRuaaPMBFQeun5K63So',
    }
  ],

}

module.exports = USER_CONFIG

