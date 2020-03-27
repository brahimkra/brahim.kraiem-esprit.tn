import React from 'react';

import Form from '../../components/form';

const AddCard = ({ onAdd }) => {
   const submit = title => onAdd(title);

   return <Form submit={submit} type="carte" />;
};

export default AddCard;
