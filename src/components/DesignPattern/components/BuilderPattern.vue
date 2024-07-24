<template>  
    <h2>Builder Pattern (Creational Pattern)</h2>
    <form @submit.prevent="submitForm">
        <div v-for="field in formFields" :key="field.name">
            <label>{{ field.label }}</label>
            <input v-if="field.type === 'text'" type="text" :placeholder="field.placeholder" :name="field.name" v-model="form[field.name]" />
            <input v-else-if="field.type === 'number'" type="number" :placeholder="field.placeholder" :name="field.name" v-model="form[field.name]" />
            <input v-else-if="field.type === 'checkbox'" type="checkbox" :name="field.name" v-model="form[field.name]" />
            <template v-else-if="field.type === 'radio'">
                <div v-for="option in field.options" :key="option">
                    <input type="radio" :name="field.name" :value="option" v-model="form[field.name]" />
                    <span>{{ option }}</span>
                </div>
            </template>
            <select v-else-if="field.type === 'select'" :name="field.name" v-model="form.country">
                <option v-for="option in field.options" :key="option">{{ option }}</option>
            </select>
        </div>
        <button>Submit</button>
    </form>
</template>

<script setup>
import formBuilder from '../../../utils/formBuilder'
import useImmer from '../../../composables/useImmer';

const formFields = new formBuilder()
    .addTextField('name', 'Name')
    .addTextField('email', 'Email')
    .addNumberField('age', 'Age')
    .addCheckboxField('agree', 'Agree')
    .addRadioField('gender', 'Gender', ['Male', 'Female'])
    .addSelectField('country', 'Country', ['India', 'USA', 'UK'])
    .build();

function submitForm() {
    console.log(form);
}

let {state: form, setState: setForm} = useImmer({name: '', email: '', age: '', agree: false, gender: '', country: ''});

</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    margin: 0;
    padding: 0;
}

h2 {
    text-align: center;
    margin-top: 20px;
    color: #333;
}

form {
    min-width: 400px;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

div {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="number"],
input[type="radio"],
input[type="checkbox"],
select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type="radio"],
input[type="checkbox"] {
    width: auto;
    margin-right: 10px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
