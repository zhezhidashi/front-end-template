import axios from "axios";
import nprogress from 'nprogress';
import "nprogress/nprogress.css";

export const baseUrl = '/api'
// export const baseUrl = 'http://47.94.142.244:8080'

// 向指定的 url 提交数据表单
export const postForm = (requestUrl, params, This, callback) => {
    nprogress.start();
    console.log('postForm 的表单', requestUrl, params)
    axios.request({
        url: baseUrl + requestUrl,
        method: 'post',
        data: params,
    }).then(({ data: res }) => {
        nprogress.done()
        console.log('postForm 的 response: ', requestUrl, res);
        if (res.state && res.state === 200) { callback(res) }
        else if (!res.state) { callback(res) }
        else {
            This.$message({
                message: res.error,
                type: 'error'
            });
        }
    })
    .catch((err) => {
        nprogress.done()
        console.log('postForm 的 error: ', requestUrl, err);
        This.$message({
            message: '网络错误',
            type: 'error'
        });
    })
}

