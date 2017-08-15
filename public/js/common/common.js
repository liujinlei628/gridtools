/**
 * 前台选中样式
 * @param lab 一级菜单
 * @param leval 级别
 * @param child 子菜单
 * @return
 */
function showHighLight(lab, leval, child){
	
	$("#menu_" + lab).addClass('active');
	$("#menu_ul_" + leval).addClass('in');
	$("#menu_li_" + child).addClass('active');
}
