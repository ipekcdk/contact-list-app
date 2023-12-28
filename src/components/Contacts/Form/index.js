import React from 'react'
import {useState} from 'react'

const initialFormValues={fullname:'', phone_number:''};

function Form({addContact, contacts}) {
    const[form, setForm]=useState(initialFormValues);

    const onChangeInput=(e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    }

    const onSubmit=(e)=>{
        e.preventDefault();

        if(form.fullname==="" || form.phone_number===""){
            return false;
        }

        addContact([...contacts, form]);
        
        setForm(initialFormValues);
    }

  return (
    <form onSubmit={onSubmit}> 
    
    <br/><br/>

      <div>
        <input name='fullname' value={form.fullname} placeholder='Full Name' onChange={onChangeInput}/>
      </div> 
      

      <div>
        <input name='phone_number' value={form.phone_number} placeholder='Phone Number' onChange={onChangeInput}/>
      </div>


      <div className='btn'>
        <button>
            Add
        </button>
      </div>

    </form>
  )
}

export default Form
