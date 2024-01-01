import { useNavigate } from 'react-router-dom';
import server from './server.tsx';


export async function FETCH(method: string, url: string, params: string | object /* | array*/, formData?: Object) {
    //console.log('FETCH : Calling FETCH')
    const errMsgLength = 100
    let auth_token = localStorage.getItem('token')
    if (!auth_token) {
        //console.log('FETCH : TOKEN NOT FOUND')
    }else{
        //console.log('FETCH : TOKEN FOUND')
    }

    let URL: string
    let baseUrl = server.server
    let finalParams = ''

    // Modifying Params 
    if (typeof (params) === 'string' && params !== '') {
        finalParams = '/'
        finalParams = finalParams + `${params}`
    } else {
        if (typeof (params) === 'object') {
            finalParams = '/?'
            let temp = ''
            Object.keys(params).forEach((ele, i) => {
                temp = `${ele}=${Object.values(params)[i]}`
                if (i !== Object.keys(params).length - 1) {
                    temp = temp + `&`
                }
            })
            finalParams = finalParams + temp
        } else {
            // type your cases here if you want to send params by some other means like array 
        }
    }

    // CHecking whether full url has been passed 
    if (url.includes('FETCH : http://') || url.includes('localhost:')) {
        URL = url + finalParams
    }
    else {
        URL = baseUrl + url + finalParams
    }

    //console.log('FETCH : Calling API: ', URL)
    //console.log('FETCH : Body', JSON.stringify(formData))

    // Calling Api Using fetch 
    try {
        if (method.toLowerCase() === 'get') {
            const res = await fetch(URL, {
                method,
                mode: 'cors',
                headers: {
                    Authorization: auth_token ? `Bearer ${auth_token}` : ''
                }
            })
            // //console.log(res)
            if (res.status === 401 || res.status === 404) {
                return { data: 'Unauthorized Login Attempt', status: 401 }
            }
            const data = (await res.json()) || {
                data: {
                    message: 'Network Error! Check Your Internet Connection',
                    status: 400
                }
            };

            //console.log(`FETCH : Data Recieved after calling API:${URL} is --->`)
            //console.log(res.status, data)

            return { status: res.status, data }
        } else {
            const res = await fetch(URL, {
                method,
                mode: 'cors',
                headers: {
                    Authorization: auth_token ? `Bearer ${auth_token}` : ''
                },
                body: new URLSearchParams(formData)
            })
            // //console.log(res)
            if (res.status === 401 || res.status === 404) {
                return { data: 'Unauthorized Login Attempt', status: 401 }
            }
            const data = (await res.json()) || {
                data: {
                    message: 'Network Error! Check Your Internet Connection',
                    status: 400
                }
            };

            //console.log(`FETCH : Data Recieved aftr calling API:${URL} is --->`)
            //console.log(res.status, data)

            return { status: res.status, data }
        }


    } catch (error) {
        if (error) {
            //console.log(`FETCH : Error in calling API:${URL}--->`)
        }
        //console.log(error)
    }
}
