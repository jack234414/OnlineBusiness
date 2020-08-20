import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function DeleteCustomerModal(props) {
    const { updateCustomers, customerId } = props;

    const [open, setOpen] = React.useState(false)
    const [name, setFirstName] = React.useState('')
    const [address, setAddress] = React.useState('')

    const changeFirstNameHandler = (e) => {
        setFirstName(e.target.value)
    }
    const changeAddressHandler = (e) => {
        setAddress(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log({ updateCustomers, customerId})
        fetch(`api/customers/${customerId}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                updateCustomers();
                setOpen(false);
                return data;
            });
    }

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button color='red'>
                        <Icon name='trash' /> Delete
                     </Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            style={{ width: '30%', height: 'auto', top: 'auto', bottom: 'auto', left: 'auto', right: 'auto' }}
        >
            <Header content='Delete customer' />
            <Modal.Content>
                <Form onSubmit={submitHandler}>
                    <Form.Field>
                        <label>Are you sure?</label>
                    </Form.Field>  
                     <Button secondary onClick={() => setOpen(false)}>
                            cancel
                     </Button>
                     <Button type='submit' color='red' content='delete' icon='remove' labelPosition='right' />
                    
                    
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default DeleteCustomerModal
