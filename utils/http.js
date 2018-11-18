const tips = {
    1005: 'appkey无效 ，请前往www.xx.com',
    3000: '期刊不存在',
    1: '抱歉出现了一个错误'
}

class HTTP {
    request(params) {
        if (!params.method) {
            params.method = 'GET'
        }
        wx.request({
            url: `${params.url}?appkey=${params.appkey}`,
            method: params.method,
            data: params.data ,
            header: {
                'content-type': 'application/json',
            },
            success: (res) => {
                console.log(res);
                let statusCode = res.statusCode.toString()
                console.log(statusCode, 'statusCode')
                if (statusCode.startsWith('2')) {
                    params.success && params.success(res)
                } else {
                    let errorCode = res.data.errorCode
                    this._show_error(errorCode)
                }
            },
            fail: (fail) => {
                let errorCode = res.data.errorCode
                this._show_error(errorCode)
            }
        })
    }

    _show_error(error_code) {
        if (!error_code) {
            error_code = 1
        }
        wx.showToast({
            title: tips[error_code],
            icon: 'none',
            duration: 2000
        })
    }
}

export { HTTP }