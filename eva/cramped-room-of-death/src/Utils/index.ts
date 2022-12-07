// 是否为移动端
export const isMobile = () => {
  const userAgentInfo = navigator.userAgent
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']

  return Agents.some((agent) => userAgentInfo.indexOf(agent) > -1)
}
