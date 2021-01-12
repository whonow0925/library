<template>
  <div class="detailPage">
    <navigation></navigation>
    <div class="header">
      <img src="./images/header-image2.png" alt="" />
    </div>
    <div class="navigation">
      <a-card
        style="width:100%;padding-left:45px"
        :tab-list="tabListNoTitle"
        :active-tab-key="noTitleKey"
        @tabChange="key => onTabChange(key, 'noTitleKey')"
      >
        <p v-if="noTitleKey === '开放时间'">
          <span>
            <a-table :columns="columns" :data-source="data" bordered>
              <template slot="name" slot-scope="text">
                <a>{{ text }}</a>
              </template>
            </a-table>
          </span>
        </p>
        <p v-else-if="noTitleKey === '交通指南'">
          <span class="traffic">
            <!-- <img src="./images/traffic.jpg" alt="" /> -->
            <!-- <div id="allmap"></div> -->
          </span>
        </p>
        <p v-else-if="noTitleKey === '馆舍平面'">
          project content
        </p>
        <p v-else-if="noTitleKey === '入馆须知'">
          <span class="entranceRules">
            1.学院实行校园卡一卡通，校园卡即为借书证，入馆凭本人校园卡在门禁处刷卡。校园卡仅限本人使用，不得转借他人。本院读者陪同他人入馆时，被陪同人员须向门卫出示身份证件，登记后方可入馆。<br />
            2.自觉遵守图书馆各项规章制度，尊重工作人员。讲究文明礼貌，着装整齐，行为举止端庄，禁止有过分亲密举动。保持安静，禁止大声喧哗或在阅览区内接打电话。保持环境卫生，禁止随地吐痰和乱丢杂物，禁止在馆内吃零食、喝饮料。<br />
            3.图书馆禁止占座行为，工作人员根据情况清理阅览桌面。图书馆对读者遗留在馆内的物品不负保管责任。<br />
            4.图书馆为重点防火、防潮单位，严禁在馆内任何地点吸烟。对于在馆内吸烟的学生，将依据学院规定给予留校察看处分；学院教职工在馆内吸烟的，将上报学院人事部门，依有关规定严肃处理。禁止在潮湿阴雨天气及空调开启时开窗。严禁携带易燃易爆等危险物品和动物入馆。<br />
            5.图书馆内禁止使用台灯等自带照明设备，禁止为电动车电池、电热宝、手机充电宝等各类充电设备充电。<br />
            6.读者不得进入空调房、配电间、网络间、天台等非开放区域，不得私自碰触照明灯、应急灯、空调的墙壁开关及其它用电设备设施。<br />
            7.爱护图书资料和馆内家具设备及其它公共设施，严禁在阅览桌椅及书刊上刻画或书写，禁止随意搬动家具，使用公共检索系统时禁止更改计算机系统的设置。<br />
            8.离开图书馆时如所携带物品导致监测仪报警，应主动配合门卫和值班人员检查。<br />
            违反上述规定者，需写出书面检讨，并视情节轻重给予批评教育、暂停借阅资格1-3个月或暂停入馆资格3-6个月等处理，或上报学院给予纪律处分。
          </span>
        </p>
        <p v-else-if="noTitleKey === '服务项目'">
          project content
        </p>
        <p v-else-if="noTitleKey === '借阅规则'">
          <span class="borrowRules">
            1.读者必须凭本人校园卡办理借阅手续，不得代借，可以代还。新生临时卡更换为正式卡前需同时出示本人身份证方可借书。凡凭校园卡借出的图书，概由持卡人负责归还和赔偿。<br />
            2.借书时需输入借阅密码。初始密码为123456，密码可通过登录图书馆网站自行修改。<br />
            3.借书时要当面点清册数，检查图书是否完整无损，如发现缺页、水渍、污损、撕拆、圈画等情形，应及时向工作人员声明，以明确责任，并由工作人员加盖污损章。否则由最后一名借书人承担责任，并按《图书馆遗失、损坏书刊赔偿办法》处理。<br />
            4.读者需要的专业图书如已借出，可在网上办理预约手续，预约后保留5天。<br />
            5.借书数量： （1）本院学生、教师及管理人员可借书30册。 （2）进修生可借书10册。<br />
            6.借书期限：<br />
            （1）图书借期60天。所借图书已到还期尚需继续使用时，如无人预约，可于到期之日前10天内在网上、或携书到借还台办理续借手续。逾期图书不能续借。每书只可续借一次，续借期为30天，从到期之日算起。逾期不还需缴纳逾期费用，每册0.20元/天。图书遗失办理赔偿手续时，逾期费用另计。读者需登录图书馆网站，进入“我的图书馆”，填写联系信息中的电子邮箱地址，以便在所借图书到期前收到提醒邮件。<br />
            （2）寒、暑假期间到期图书，只要在开学后的一周内归还，不视为逾期，否则逾期时间要包含寒、暑假。<br />
          </span>
        </p>
        <p v-else-if="noTitleKey === '吉珠新闻'">
          <span class="news">
            <span class="title">吉珠简报</span>
            <a-row>
              <a-col :span="16">
                <span class="newsImage"><img src="./images/newsImage.jpg"/></span>
              </a-col>
              <a-col :span="8">
                <span class="content">
                  <table>
                    <tr>
                      <th class="new_title">本馆新闻</th>
                    </tr>
                    <tr v-for="(item, index) in newsList" :key="item.id">
                      <td style="width:75px">{{ item.time }}</td>
                      <td :class="item.type == '新闻' ? 'advertising' : 'notice'">{{ item.type }}</td>
                      <a class="content" @click="showModal(index)">
                        {{ item.content.length > 18 ? item.content.slice(0, 18) + '...' : item.content }}
                      </a>
                    </tr>
                  </table>
                </span>
              </a-col>
            </a-row>
          </span>
        </p>
        <p v-else-if="noTitleKey === '发展规划'">
          project content
        </p>
        <p v-else-if="noTitleKey === '联系我们'">
          <span class="connect">
            <a-table :columns="columns_connect" :data-source="connectData">
              <a slot="name" slot-scope="text">{{ text }}</a>
            </a-table>
          </span>
        </p>
      </a-card>
    </div>
    <div class="newsModal">
      <a-modal v-model="visible" :title="this.newsList[newsId].content" :footer="null">
        <p>{{ this.newsList[newsId].newsDetail }}</p>
        <div class="modalButton">
          <a-button type="primary" @click="closeModal">关闭详情</a-button>
        </div>
      </a-modal>
      <br />
      <br />
    </div>
  </div>
</template>
<script>
import navigation from '@/components/Navigation/navigation'
// import Navigation from '@/components/Navigation/navigation.vue'
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    attrs: {}
  }
  // if (index === 4) {
  //   obj.attrs.colSpan = 0
  // }
  return obj
}

const data = [
  {
    key: '1',
    floor: '6F',
    functionalAreas: '报刊阅览区',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '2',
    floor: '6F',
    functionalAreas: '共享空间（自习区）',
    time: '星期一至星期日 07:00 - 22:30'
  },
  {
    key: '3',
    floor: '5F',
    functionalAreas: '电子文献阅览区',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '4',
    floor: '5F',
    functionalAreas: '教师休息区',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '5',
    floor: '5F',
    functionalAreas: '研讨间',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '6',
    floor: '5F',
    functionalAreas: '共享空间（自习区）',
    time: '星期一至星期日 07:00 - 22: 30'
  },
  {
    key: '7',
    floor: '4F',
    functionalAreas: '人文社会科学图书阅览区（I-K类）',
    time: '星期一至星期六 08:30 - 22:00'
  },
  {
    key: '8',
    floor: '4F',
    functionalAreas: '共享空间（自习区）',
    time: '星期一至星期六 08:30 - 22:00'
  },
  {
    key: '9',
    floor: '3F',
    functionalAreas: '人文社会科学图书阅览区（A-H类）',
    time: '星期一至星期日 08:00 - 22:00'
  },
  {
    key: '10',
    floor: '3F',
    functionalAreas: '共享空间（自习区）',
    time: '星期一至星期日 07:00 - 22:30'
  },
  {
    key: '11',
    floor: '2F',
    functionalAreas: '西文图书阅览区',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '12',
    floor: '2F',
    functionalAreas: '新书阅览区',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '13',
    floor: '2F',
    functionalAreas: '理工科图书阅览区（N-Z类）',
    time: '星期一至星期五、星期日 08:30 - 22:00'
  },
  {
    key: '14',
    floor: '2F',
    functionalAreas: '培训室和党员活动室',
    time: '星期一至星期五、星期日 08:30 - 17:00'
  },
  {
    key: '15',
    floor: '1F',
    functionalAreas: '总借还台',
    time: '星期一至星期六 09:30 - 19:30'
  },
  {
    key: '16',
    floor: '1F',
    functionalAreas: '自习区',
    time: '星期一至星期日 07:00 - 22:30'
  },
  {
    key: '17',
    floor: '1F',
    functionalAreas: '书目检索区',
    time: '星期一至星期日 07:00 - 22:30'
  }
]
// 联系我们的数据
const columns_connect = [
  {
    title: '机构名称',
    dataIndex: 'institutionName',
    key: 'institutionName',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '联系人',
    dataIndex: 'name',
    key: 'name'
    // width: 80,
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
    key: 'phone'
    // ellipsis: true,
  }
]

const connectData = [
  {
    key: '1',
    institutionName: '办公室',
    name: '张小慧',
    phone: '0756-7626255/13726244008'
  },
  {
    key: '2',
    institutionName: '办采访与编目部室',
    name: ' 罗 伟',
    phone: '15820599879(短号：639879)'
  },
  {
    key: '3',
    institutionName: '流通与阅览部',
    name: '丁可宁',
    phone: '13726289335(短号：6999)'
  },
  {
    key: '4',
    institutionName: '信息与技术部',
    name: '王 超',
    phone: '13726205228(短号：615228)'
  },
  {
    key: '5',
    institutionName: '参考咨询部',
    name: '米梓源',
    phone: '18218937966(短号：617966）'
  },
  {
    key: '6',
    institutionName: '期刊部',
    name: '丁可宁',
    phone: '13726289335(短号：6999)'
  }
]
export default {
  components: {
    navigation
  },
  data() {
    const columns = [
      {
        title: '楼层',
        dataIndex: 'floor',
        customRender: (text, row, index) => {
          if (index < 17) {
            return <a href="javascript:;">{text}</a>
          }
          return {
            children: <a href="javascript:;">{text}</a>,
            attrs: {
              colSpan: 5
            }
          }
        }
      },
      {
        title: '功能区',
        dataIndex: 'functionalAreas',
        customRender: renderContent
      },
      {
        title: '开放时间',
        colSpan: 2,
        dataIndex: 'time',
        customRender: (value, row, index) => {
          const obj = {
            children: value,
            attrs: {}
          }
          // if (index === 2) {
          //   obj.attrs.rowSpan = 2
          // }
          // // These two are merged into above cell
          // if (index === 3) {
          //   obj.attrs.rowSpan = 0
          // }
          // if (index === 4) {
          //   obj.attrs.colSpan = 0
          // }
          return obj
        }
      }
    ]
    return {
      newsId: 1,
      visible: false,
      //吉珠新闻列表
      newsList: [
        {
          id: 1,
          time: '2019-1-23',
          type: '新闻',
          content: '我校图书馆受邀参加《珠海商贸史料辑录》首发式',
          newsDetail: '111'
        },
        {
          id: 2,
          time: '2019-1-23',
          type: '公告',
          content: '我校图书馆受邀参加《珠海商贸史料辑录》首发式',
          newsDetail: '2222'
        },
        {
          id: 3,
          time: '2019-1-23',
          type: '新闻',
          content: '我校图书馆受邀参加《珠海商贸史料辑录》首发式',
          newsDetail: '3333'
        },
        {
          id: 4,
          time: '2019-1-23',
          type: '新闻',
          content: '我校图书馆受邀参加《珠海商贸史料辑录》首发式',
          newsDetail: '1144441'
        }
      ],
      columns_connect,
      connectData, //联系我们的table数据
      data,
      columns, //开放时间的table数据
      tabListNoTitle: [
        {
          key: '开放时间',
          tab: '开放时间'
        },
        {
          key: '交通指南',
          tab: '交通指南'
        },
        {
          key: '馆舍平面',
          tab: '馆舍平面'
        },
        {
          key: '入馆须知',
          tab: '入馆须知'
        },
        {
          key: '服务项目',
          tab: '服务项目'
        },
        {
          key: '借阅规则',
          tab: '借阅规则'
        },
        {
          key: '吉珠新闻',
          tab: '吉珠新闻'
        },
        {
          key: '发展规划',
          tab: '发展规划'
        },
        {
          key: '联系我们',
          tab: '联系我们'
        }
      ],
      key: 'tab1',
      noTitleKey: this.$route.query.name
    }
  },
  mounted() {
    // this.showMap()
  },
  methods: {
    // showMap() {
    //   var map = new window.BMap.Map('allmap') // 创建Map实例
    //   map.centerAndZoom(new window.BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
    //   //添加地图类型控件
    //   map.addControl(
    //     new window.BMap.MapTypeControl({
    //       mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    //     })
    //   )
    //   map.setCurrentCity('珠海') // 设置地图显示的城市 此项是必须设置的
    //   map.enableScrollWheelZoom(true)
    // },
    onTabChange(key, type) {
      console.log(key, type)
      this[type] = key
    },
    showModal(index) {
      this.visible = true
      this.newsId = index
      console.log(index)
    },
    closeModal() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
/* @import url('https://fonts.font.im/css?family=Hanalei+Fill'); */

.ant-card-head {
  display: flex;
  align-items: center;
  justify-content: center;
}
.modalButton {
  display: flex;
  justify-content: center;
}
.detailPage {
  .header {
    width: 100%;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .navigation {
    /* font-family: 'Hanalei Fill', cursive; */
  }
  .traffic {
    img {
      width: 400px;
      margin-left: 250px;
    }
    #allmap {
      width: 100%;
      height: 100%;
      overflow: hidden;
      margin: 0;
      font-family: '微软雅黑';
    }
  }
  .news {
    .title {
      display: inline-block;
      width: 500px;
      height: 50px;
      background-color: rgb(163, 25, 20);
      font-size: 28px;
      color: white;
      text-align: center;
    }
    .newsImage {
      img {
        display: inline-block;
        width: 700px;
        margin: 50px 20px;
      }
    }
    .content {
      table {
        margin-top: 20px;
        .new_title {
          color: wheat;
          font-size: 18px;
        }
        .advertising {
          width: 40px;
          background-color: rgb(163, 25, 20);
          color: white;
          border-radius: 10px;
          text-align: center;
          // font-weight: 100;
        }
        .notice {
          width: 40px;
          background-color: #f0ad4e;
          color: white;
          border-radius: 10px;
          text-align: center;
        }
      }
    }
  }
}
</style>
