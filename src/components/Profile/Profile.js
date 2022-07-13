import React, { useEffect, useState } from 'react'
import { ProfileInfo, Tabs, TabsButton, Title } from './Profile.style'
import DataProfile from './Data.json'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Wave from '../../assets/image/Wave.png'

export default function Profile() {

   const [value, setValue] = useState(0)

//    console.log(value)
  return (
    <ProfileInfo className='text-white profile'>
        <Title>Profile & Skills</Title>
        <Tabs>  
            <TabsButton>
            {
                DataProfile.map((data, index) => {
                    return(
                            <button
                                key={data.id}
                                onClick={() => setValue(index)}
                                className={`job-btn ${index === value && 'active-btn'}`}>
                                {data.title}
                            </button>
                    )
                })
            }
            
            </TabsButton>
            <article>
            {
                DataProfile[value].desc.map((data) => {
                    return(
                        <div>
                            <p>{data}</p>
                        </div>
                    )
                }) 
            }          
            </article>
        </Tabs>
        {/* <p>Data: {DataProfile && DataProfile[value].desc}</p> */}
    </ProfileInfo>
  )
}
