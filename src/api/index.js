import http from './public'
export const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}
// 登录接口
export const cdd = '/rz'
export const userLogin = (params) => {
  return http.fetchPost(cdd + '/login.json', params)
}
// 登出接口
export const userLoginOut = (params) => {
  return http.fetchPost(cdd + '/loginOut.json', params)
}
// 获取用户信息
export const userInfo = (params) => {
  return http.fetchPost(cdd + '/common/userInfo.json', params)
}
// 分期审核列表获取接口
export const cheCredit = (params) => {
  return http.fetchPost(cdd + '/filter/cheCredit/queryCheCreditList.json', params)
}
// 臻商分自评后台
export const zsf = '/zsf'
// 自评记录查询接口
export const zsfQuery = (params) => {
  return http.fetchPost2(zsf + '/selfeval/query', params)
}
// 【臻收银模块】
export const zsy = '/zsy'
// ===商户管理模块接口===
// 用户列表(商户列表)
export const merchantList = (params) => {
  return http.fetchPost(zsy + '/zcash/customer/list.do', params)
}
// ===代理商管理模块接口===
// 代理商列表
export const agentlist = (params) => {
  return http.fetchPost(zsy + '/zcash/agents/list.do', params)
}
// 代理商是否启用接口
export const updateUsing = (params) => {
  return http.fetchPost(zsy + '/zcash/agents/updateUsing.do', params)
}
// 代理商详情
export const viewAgents = (params) => {
  return http.fetchPost(zsy + '/zcash/agents/viewAgents.do', params)
}
// ===意见反馈模块接口===
// 意见反馈列表
export const mileageList = (params) => {
  return http.fetchPost(zsy + '/zcash/opinion/list.do', params)
}

// 处理意见接口
export const handleMileage = (params) => {
  return http.fetchPost(zsy + '/zcash/opinion/handle.do', params)
}

// 查看处理详情接口
export const handleDetail = (params) => {
  return http.fetchPost(zsy + '/zcash/opinion/getById.do', params)
}

// 添加代理商接口
export const addAgents = (params) => {
  return http.fetchPost(zsy + '/zcash/agents/addAgents.do', params)
}

// 编辑代理商接口
export const updateAgents = (params) => {
  return http.fetchPost(zsy + '/zcash/agents/updateAgents.do', params)
}

// 七牛模块获取token值
export const zsPToken = (params) => {
  return http.fetchPost(zsy + '/common/qiniu/zsPToken.do', params)
}

// 获取省市区
export const cityList = (params) => {
  return http.fetchPost(zsy + '/common/district/list.do', params)
}
