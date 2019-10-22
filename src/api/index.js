/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-10-22 16:32:52
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-22 16:34:26
 */
const modulesFiles = require.context('./api', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath)
  modules = Object.assign(modules, value.default)
  return modules
}, {})

export default modules