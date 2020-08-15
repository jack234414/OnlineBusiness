import React, { Component } from 'react';
import { Button, Table, Icon } from 'semantic-ui-react'

export class Customer extends Component {
  //static displayName = FetchData.name;

  constructor(props) {
    super(props);
      this.state = { customers: [] };
  }

    componentDidMount() {
        fetch('api/customers', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                this.setState({ customers: data });
                return data;
            });
    }

    render() {
        return (
            <div>
                <Button primary>New Customer</Button>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Address</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.customers.map(customer => 
                            <Table.Row key={customer.id}>
                                <Table.Cell>{customer.name}</Table.Cell>
                                <Table.Cell>{customer.address}</Table.Cell>
                                <Table.Cell>
                                    <Button primary>
                                        <Icon name='edit outline' /> Edit
                                    </Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color='red'>
                                        <Icon name='trash' /> Delete
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}
