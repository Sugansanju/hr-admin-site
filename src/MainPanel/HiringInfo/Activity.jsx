import React from 'react'
import UserList from './UserList'
import profile from '../../assets/profile.jpg'
function Activity() {
    const userList=[
        {
            profile:profile,
            name:'John Doe',
            role:'Python Developer',
            subHead:'Interview with Stella',
            updatedAt:'15 mins ago'
        },
        {
            profile:profile,
            name:'John Doe',
            role:'Python Developer',
            subHead:'Interview with Stella',
            updatedAt:'15 mins ago'
        },
        {
            profile:profile,
            name:'John Doe',
            role:'Python Developer',
            subHead:'Interview with Stella',
            updatedAt:'15 mins ago'
        }
    ]
  return (
   <>
   <div className='pt-3'>
            <div className='d-flex justify-content-between'>
                    <div>
                        <span className='heading-text'>Activity</span>
                    </div>
                    <div className='pt-1'>
                        <span className='view-all'>View All</span>
                    </div>
            </div>
            <div>
                <UserList data={userList}/>
            </div>
        </div>
   </>

  )
}

export default Activity