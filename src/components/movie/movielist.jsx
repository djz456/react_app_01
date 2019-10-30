import React from 'react';

// 导入ui组件
import { Spin, Alert } from 'antd';

export default class Movielist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: [],
            nowPage: parseInt(props.match.params.page) || 1,
            pageSize: 14,//每页最多显示多少条数据
            tatal: 0,//当前电影分类下，总共有多少条数据
            isloading:true //true正在加载
        }

    }

//     componentWillMount() {
//         //#region 
//         /*
//         fetch('http://api.komavideo.com/news/list').then(response=>{//http://api.komavideo.com/news/list 第一个.then拿到的是response对象
//              // console.log(response);
//             return response.json()
             
//          })
//          .then(data=>{
//             console.log(data);
            
             
//          })
//         */
//         //#endregion
// setTimeout(()=>{
//     this.setState({
//         isloading:false
//     },1000)
// })
//     }

    render() {
        return (<div>
            {/* {this.renderlist()} */}
            <h1 style={{ fontSize: '35px' }}> movelist--{this.props.match.params.type}
                --{this.props.match.params.page}</h1>
        </div>)
    }

    // renderlist= ()=>{
    //     if(this.isloading){
    //         return <Spin tip="Loading...">
    //         <Alert
    //             message="正在获取电影列表"
    //             description="数据正在加载中，精彩内容马上呈现..."
    //             type="info"
    //         />
    //     </Spin>
    //     }else{
    //         return <h1>加载完成了</h1>
    //     }
    // }
}