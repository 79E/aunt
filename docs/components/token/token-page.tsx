import React from "react"
import './token-page.less'

function TokenPage (){
    const colors = [
        {
            title:'主题色',
            value:'#165DFF',
            cssvar:'--aunt-primary-color'
        },
        {
            title:'成功色',
            value:'#27C346',
            cssvar:'--aunt-success-color'
        },
        {
            title:'警告色',
            value:'#FF7D00',
            cssvar:'--aunt-warning-color'
        },
        {
            title:'错误色',
            value:'#F53F3F',
            cssvar:'--aunt-danger-color'
        }
    ]
    const shadows = [
        {
            title:'默认阴影',
            value:'0 0 1px rgba(0, 0, 0, 0.3)',
            cssvar:'--aunt-shadow-special'
        },
        {
            title:'默认阴影',
            value:'0 -2px 5px rgba(0, 0, 0, 0.1)',
            cssvar:'--aunt-shadow1-center'
        },
        {
            title:'默认阴影',
            value:'0 0 10px rgba(0, 0, 0, 0.1)',
            cssvar:'--aunt-shadow2-center'
        },
        {
            title:'默认阴影',
            value:'0 0 20px rgba(0, 0, 0, 0.1)',
            cssvar:'--aunt-shadow3-center'
        }
    ]
    const otherColor = [
        {
            title:'默认文字颜色',
            value:'#4e5969',
            cssvar:'--aunt-text-color'
        },
        {
            title:'活跃文字颜色',
            value:'#f2f3f5',
            cssvar:'--aunt-active-color'
        },
        {
            title:'默认背景颜色',
            value:'#f7f8fa',
            cssvar:'--aunt-background-color'
        },
        {
            title:'默认链接颜色',
            value:'#3491FA',
            cssvar:'--aunt-text-link-color'
        }
    ]
    const gradients = [
        {
            title:'蓝色渐变',
            value:'linear-gradient(to right, #3491FA, #165DFF)',
            cssvar:'--aunt-gradient-red'
        },
        {
            title:'红色渐变',
            value:'linear-gradient(to right, #ff6034, #ee0a24)',
            cssvar:'--aunt-gradient-red'
        },
        {
            title:'橙色渐变',
            value:'linear-gradient(to right, #ffd01e, #ff8917)',
            cssvar:'--aunt-gradient-orange'
        },
        {
            title:'绿色渐变',
            value:'linear-gradient(to right, #9FDB1D, #27C346)',
            cssvar:'--aunt-gradient-orange'
        },
    ]
    return <div className="token-page">
        <h2 className="token-page-title">主色</h2>
        <div className="token-page-center">
            {
                colors.map((item)=>{
                    return <div key={item.value} className="token-page-center-card">
                    <div style={{
                        backgroundColor:item.value
                    }}>
                        <p>{item.value}</p>
                        {/* <p>{item.cssvar}</p> */}
                    </div>
                    <span>{item.title}</span>
                </div>
                })
            }
        </div>
        <h2 className="token-page-title">渐变色</h2>
        <div className="token-page-center">
            {
                gradients.map((item)=>{
                    return <div key={item.value} className="token-page-center-card">
                    <div style={{
                        backgroundImage:item.value,
                        width:400,
                    }}>
                        {/* <p>{item.value}</p> */}
                        {/* <p>{item.cssvar}</p> */}
                    </div>
                    <span>{item.title}</span>
                </div>
                })
            }
        </div>
        <h2 className="token-page-title">阴影</h2>
        <div className="token-page-center">
            {
                shadows.map((item)=>{
                    return <div key={item.value} className="token-page-center-card">
                            <div  style={{
                                boxShadow: item.value
                            }}>
                            </div>
                            <span>{item.value}</span>
                    </div>
                })
            }
        </div>
    </div>
}

export default TokenPage;