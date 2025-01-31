import { SearchFile } from '@/Constant'
import { Search } from 'react-feather'
import { CardHeader, Form, Input } from 'reactstrap'

const SearchInput = () => {
  return (
    <CardHeader className='pb-0'>
        <Form className='theme-form'>
            <div className='input-group m-0 flex-nowrap'>
                <Input className='form-control-plaintext' type='search' placeholder={SearchFile}/>
                <div className='btn btn-primary'>
                <Search className='search-icon'/>
                </div>
            </div>
        </Form>
    </CardHeader>
  )
}

export default SearchInput
