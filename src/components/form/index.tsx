import React from "react";
import Button from "../button";
import './styles.scss'

class Form extends React.Component {
    render() {
        return (
            <form className="new__task">
                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name="tarefa"
                        id="tarefa"
                        placeholder="Título da tarefa"
                        required
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                        type="text" 
                        step="1"
                        name="tempo"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button 
                    text="Adicionar" 
                />
            </form>
        )
    }
}

export default Form