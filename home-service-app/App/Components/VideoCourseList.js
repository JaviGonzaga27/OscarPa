import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Utils/GlobalApi'

export default function VideoCourseList() {

    const [videoList,setVideoList]=useState([]);
    useEffect(()=>{
        getVideoCourse();
    },[])
    const getVideoCourse=async()=>{
        const resp=(await GlobalApi.getVideoCourse()).data;
        const result=resp.data.map((item)=>({
           id:item.id,
            title:item.attributes.title,
            desc:item.attributes.description,
            image:item.attributes.image.data.attributes.url,
            videoTopic:item.attributes.VideoTopic
        }))
        setVideoList(result);
        console.log(result);
    }
  return (
    <View style={{marginTop:15}}>
       <Text style={{fontSize:20,fontWeight:'bold',marginBottom:3}}>Videos</Text>
       <FlatList
       data={videoList}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       renderItem={({item})=>(
        <View>
            <Image source={{uri:item.image}}
            style={{width:180,height:100,marginRight:18,borderRadius:10}}/>
            </View>
       )}
       />
    </View>
  )
}