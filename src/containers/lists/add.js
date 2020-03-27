import React from 'react';
import Form from '../../components/form';

const AddList = ({ onAdd }) => {
   const submit = title => onAdd(title);

   return <Form submit={submit} type="liste" />;
};

export default AddList;
