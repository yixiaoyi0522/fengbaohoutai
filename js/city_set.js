function init(obj_1,val_1,obj_2,val_2,obj_3,val_3){
	
	//定义默认数据
	var ar = ["请选择省份","请选择城市","请选择区县"];
	var pindex=0;
	var cindex=0;
	
	//初始化
	$("<option value=''>"+ar[0]+"</option>").appendTo($("#"+obj_1));
	$("<option value=''>"+ar[1]+"</option>").appendTo($("#"+obj_2));
	$("<option value=''>"+ar[2]+"</option>").appendTo($("#"+obj_3));
	
	//初始化obj_1
	for (i=0;i<mp.length;i++){
			if (mp[i]==val_1){
				pindex = i;
				$("<option selected>"+mp[i]+"</option>").appendTo($("#"+obj_1));
			}else{
				$("<option>"+mp[i]+"</option>").appendTo($("#"+obj_1));
				}
		}

	if (pindex!=-1){
			for (n=0;n<mc[pindex].length;n++){
					if (mc[pindex][n]==val_2){
						cindex = n;
						$("<option selected>"+mc[pindex][n]+"</option>").appendTo($("#"+obj_2));
					}else{						
						$("<option>"+mc[pindex][n]+"</option>").appendTo($("#"+obj_2));
					}			
				}		
		}

	if (cindex!=-1){
			for (m=0;m<mh[pindex][cindex].length;m++){
					if (mh[pindex][cindex][m]==val_3){
							$("<option selected>"+mh[pindex][cindex][m]+"</option>").appendTo($("#"+obj_3));
						}else{						
							$("<option>"+mh[pindex][cindex][m]+"</option>").appendTo($("#"+obj_3));
						}	
				}
		}
		
		
	//响应obj_1的change事件	
	$("#"+obj_1).change(function(){
		//获取索引
		pindex = $("#"+obj_1).get(0).selectedIndex-1;
		//清空c和h
		$("#"+obj_2).empty();
		//重新给c填充内容
		$("<option>"+ar[1]+"</option>").appendTo($("#"+obj_2));
		if (pindex!=-1){
			for (k=0;k<mc[pindex].length;k++){
				$("<option>"+mc[pindex][k]+"</option>").appendTo($("#"+obj_2));
			}
		}	
		//清空h
		$("#"+obj_3).empty();
		$("<option>"+ar[2]+"</option>").appendTo($("#"+obj_3));
	});
	
	//响应obj_2的change事件	
	$("#"+obj_2).change(function(){
		cindex = $("#"+obj_2).get(0).selectedIndex-1;
		//清空h
		$("#"+obj_3).empty();
		//重新给h填充内容
		$("<option>"+ar[2]+"</option>").appendTo($("#"+obj_3));
		if (cindex!=-1){
			for (j=0;j<mh[pindex][cindex].length;j++){
				$("<option>"+mh[pindex][cindex][j]+"</option>").appendTo($("#"+obj_3));
			}
		}
	});
	
}