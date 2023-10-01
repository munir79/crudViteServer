import React from 'react';

const Registar = () => {
    const handleRegistar=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        console.log(name,email);
    }
    return (
        <div>
            <h1> Registar Here </h1>
            <form onSubmit={handleRegistar}>
                <input type="text" name='name' placeholder='enter your name ' /><br />
                <input type="email" name="email" id=""  placeholder='enter your email'/><br />
                <button type="submit">Registar</button>
            </form>
        </div>
    );
};

export default Registar;