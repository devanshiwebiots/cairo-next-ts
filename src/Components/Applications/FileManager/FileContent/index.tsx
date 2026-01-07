import { ImagePath } from '@/Constant'
import { useAppSelector } from '@/Redux/Hooks'
import React from 'react'
import { Card, CardHeader } from 'reactstrap'
import SearchBar from '../SearchBar'
import { FileContentButtonActions } from './FileContentButtonActions'
import FileMainContent from './FileMainContent'
import Image from 'next/image'

const FileConent = () => {
    const {myFile, searchTerm} = useAppSelector((state) => state.fileManager)

    const fileList = myFile.filter((data) => {
        if(searchTerm == null) return data;
        if(data.name.toLocaleLowerCase().includes(searchTerm.toLowerCase())) return data
    })
  return (
   <Card>
    <CardHeader>
        <div className='d-md-flex d-sm-block'>
            <SearchBar />
            <FileContentButtonActions />
        </div>
    </CardHeader>
    {fileList.length ? <FileMainContent fileList={fileList} /> : <Image className="img-fluid mx-auto my-4" src={`${ImagePath}/sad.gif`} alt="image" width={150} height={150} unoptimized/>}
   </Card>
  )
}

export default FileConent
