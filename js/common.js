function login(workid,password,cb,errcb){
	var data = {
		workid:workid,
		password:password,
		deviceid:api.deviceId
	}
	console.log("userdata"+JSON.stringify(data));
	console.log("url.login"+url.login);
	post(url.login,data,function(ret,err){
		if(err){
			if(errcb){
				errcb(err.msg);
			}
		}else if(ret.retStatus == 'OK'){
			if(cb){
				cb(ret.retValue);
			}
		}else{
			if(errcb){
				errcb(JSON.stringify(ret));
			}
		}
	});
}
function executeSql(db, sql, cb, errCb){
	db.executeSql({
		name : config.DB_NAME,
		sql : sql,
	},function(ret, err){
		if(err){
			if(errCb)
				errCb(err.msg)
		}else{
			if(cb)
				cb()
		}
	})
}
function selectSql(db, sql, cb, errCb){
	db.selectSql({
		name : config.DB_NAME,
		sql : sql
	}, function(ret, err){
		if(err){
			if(errCb)
				errCb(err.msg)
		}else{
			if(cb)
				cb(ret.data)
		}
	})
}
function toast(msg,time){
	if(!time){
		time = 2000
	}
	api.toast({
	    msg:msg,
	    duration:time,
	    location:'bottom'
    });
}