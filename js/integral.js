//                         _ooOoo_  
//                        o8888888o  
//                        88" . "88  
//                        (| -_- |)  
//                         O\ = /O  
//                     ____/`---'\____  
//                   .   ' \\| |// `.  
//                    / \\||| : |||// \  
//                  / _||||| -:- |||||- \  
//                    | | \\\ - /// | |  
//                  | \_| ''\---/'' | |  
//                   \ .-\__ `-` ___/-. /  
//                ___`. .' /--.--\ `. . __  
//             ."" '< `.___\_<|>_/___.' >'"".  
//            | | : `- \`.;`\ _ /`;.`/ - ` : | |  
//              \ \ `-. \_ __\ /__ _/ .-` / /  
//      ======`-.____`-.___\_____/___.-`____.-'======  
//                         `=---='  
//  
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//               佛祖保佑            永无BUG



function addLoadEvent(func) {  // 页面加载完毕后执行
	var oldonload = window.onload;
	if(typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
addLoadEvent(tabSwitch);
addLoadEvent(aa);
addLoadEvent(bb);
addLoadEvent(cc);
addLoadEvent(dd);
addLoadEvent(ee);
addLoadEvent(failureWindow);
addLoadEvent(packsReceive);
addLoadEvent(packsReceiveNo);
addLoadEvent(packsReceiveYes);
addLoadEvent(rechargeCalls);
addLoadEvent(rechargeCallsNo);
addLoadEvent(rechargeCallsYes);



function tabSwitch() {  // 底部nav切换选项卡
	var nav = document.getElementById("nav");
	var nav_li = nav.getElementsByTagName("li");

	for (var i=0; i<nav_li.length; i++) {
		nav_li[i].onclick = function() {
			for (var i=0; i<nav_li.length; i++) {
				nav_li[i].setAttribute("class", "");
			}
			this.setAttribute("class", "selected");
		}
	}
}




function aa() {
	var flow = document.getElementById("flow");
	var flow_win = document.getElementById("flow_win");

	flow.onclick = function() {
		flow_win.setAttribute("style", "display: block;");
	}
}

function bb() {
	var bill = document.getElementById("bill");
	var bill_win = document.getElementById("bill_win");

	bill.onclick = function() {
		bill_win.setAttribute("style", "display: block;");
	}
}

function cc() {
	var flow_win = document.getElementById("flow_win");
	var bill_win = document.getElementById("bill_win");

	flow_win.onclick = function() {
		flow_win.setAttribute("style", "display: none;");
	}
	bill_win.onclick = function() {
		bill_win.setAttribute("style", "display: none;");
	}
}

function dd() {
	var flow_win_yes = document.getElementById("flow_win_yes");

	flow_win_yes.onclick = function() {
		document.write("<h1 style= 'text-align: center; font-size: 200%; line-height: 200%;'>不充钱还想领流量？？<br>臭屌丝</h1>");
	}
}

function ee() {
	var bill_win_yes = document.getElementById("bill_win_yes");

	bill_win_yes.onclick = function() {
		document.write("<h1 style= 'text-align: center; font-size: 200%; line-height: 200%;'>不充钱还想领话费？？<br>臭屌丝</h1>");
	}
}

function packsReceive() { // XXX领取
	var integral_ad = document.getElementById("integral_ad");
	var receive_window = document.getElementById("receive_xxx");

	integral_ad.onclick = function() {
		receive_window.setAttribute("style", "display: block;");
	}
}

function packsReceiveNo() {  // XXX领取 - 取消
	var receive_window = document.getElementById("receive_xxx");
	var receive_window_no = document.getElementById("alert_button_no");

	receive_window_no.onclick = function() {
		receive_window.setAttribute("style", "display: none;");
	}
}

function packsReceiveYes() {  // XXX领取 - 确定
	var receive_window = document.getElementById("receive_xxx");
	var receive_window_yes = document.getElementById("alert_button_yes");
	var telephone_error = document.getElementById("alert_input_error");

	receive_window_yes.onclick = function() {
		var telephone_input_cont = document.getElementById("receive_xxx_telephone").value;
		if (isNaN(telephone_input_cont) || telephone_input_cont.length!=11 || telephone_input_cont[0]!=1) {
			telephone_error.style.display = "block";
		} else {
			receive_window.setAttribute("style", "display: none;");
		}
	}
}

function rechargeCalls() {  // 充值话费
	var integral_button = document.getElementById("integral_button");
	var recharge_calls = document.getElementById("recharge_calls");

	integral_button.onclick = function() {
		recharge_calls.setAttribute("style", "display: block;");
	}
}

function rechargeCallsNo() {  // 充值话费 - 取消
	var recharge_calls_no = document.getElementById("recharge_calls_no");
	var recharge_calls = document.getElementById("recharge_calls");

	recharge_calls_no.onclick = function() {
		recharge_calls.setAttribute("style", "display: none;");
	}
}

function rechargeCallsYes() {  // 充值话费 - 确定
	var recharge_calls = document.getElementById("recharge_calls");
	var recharge_calls_yes = document.getElementById("recharge_calls_yes");
	var recharge_calls_error = document.getElementById("recharge_calls_error");

	recharge_calls_yes.onclick = function() {
		var recharge_calls_input_cont = document.getElementById("recharge_calls_input").value;
		if (isNaN(recharge_calls_input_cont) || recharge_calls_input_cont.length!=11 || recharge_calls_input_cont[0]!=1) {
			recharge_calls_error.style.display = "block";
		} else {
			recharge_calls.setAttribute("style", "display: none;");
		}
	}
}
