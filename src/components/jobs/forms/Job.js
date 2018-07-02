import React from 'react'
import JobsForm from '../../common/form/JobsForm'
import Logo from '../../common/Logo'
import './job.sass'

function Job(props) {
    
    function transformErrors(errors) {
        return errors.map(error => {
            if (error.property === ".job.title") {
                error.message = "Porfavor ingresar el título"
            }
            if (error.property === ".job.place") {
                error.message = "Porfavor ingresar la ubicación"
            }
            if (error.property === ".job.description") {
                error.message = "Porfavor ingresar la descripción del trabajo"
            }
            if (error.property === ".job.howtoapply") {
                error.message = "Porfavor explica como postular al trabajo"
            }
            if (error.property === ".company.name") {
                error.message = "Porfavor ingresa el nombre de la empresa"
            } 
            if (error.property === ".company.email") {
                error.message = "Porfavor ingresa el correo de la empresa"
            }                  
            return error;
        });
    }
        
    const schema = {
        "type": "object",
        "title": "Publica tu empleo",
        "properties": {
            "job": {
                "type": "object",
                "title": "Cuentanos sobre el puesto de trabajo",
                "required": [
                    "title",
                    "place",
                    "description",
                    "howtoapply"
                ],
                "properties": {
                    "title": { 
                        "type": "string", 
                        "title": "Titulo",
                        "messages": {
                            "required": "Please enter your First name",
                            "minLength": "First name should be > 5 characters"
                        }
                    },
                    "category": {
                        "type": "string",
                        "title": "Categoria",
                        "enum": [
                            "Freelancer",
                            "Part time",
                            "Full time",
                        ]
                    },
                    "place": { 
                        "type": "string", 
                        "title": "Ubicación" 
                    },            
                    "description": { 
                        "type": "string", 
                        "title": "Descripción" 
                    },
                    "howtoapply": { 
                        "type": "string", 
                        "title": "¿Como postular al trabajo?" 
                    },
                }
            },
            "company": {
                "type": "object",
                "title": "Cuentanos sobre tu empresa",
                "required": [
                    "name",
                    "email"
                ],
                "properties": {
                    "name": { 
                        "type": "string", 
                        "title": "Nombre" 
                    },
                    "slogan": {
                        "type": "string", 
                        "title": "Slogan de la empresa"
                    },
                    "logo": {
                        "type": "string",
                        "format": "data-url",
                        "title": "Logo"
                    },
                    "url": { 
                        "type": "string", 
                        "title": "Página de tu empresa" 
                    },
                    "email": { 
                        "type": "string", 
                        "title": "Correo electrónico" 
                    },
                    "description": {
                        "type": "string",
                        "title": "Algo más de tu empresa"
                    }
                }
            }
        }    
    };
    
    const uiSchema = {
        "job": {     
            "title": {
                "ui:help": "\"Diseñador grafico\" o \"Desarrollador frontend\""
            },
            "place": {
                "ui:help": "En que ciudad se encuentra la empresa"
            },           
            "description": {
                "classNames": "wide-input",
                "ui:widget": "textarea",
                "ui:options": {
                    "rows": 5
                }
            },
            "howtoapply": {
                "classNames": "wide-input",
                "ui:widget": "textarea",
                "ui:help": "Ejemplo: Enviar CV a informes@empresa.com"
            }
        },
        "company": {
            "slogan": {
                "ui:widget": "textarea"
            },
            "description": {
                "classNames": "wide-input",
                "ui:widget": "textarea",
                "ui:options": {
                    "rows": 5
                }
            },
            "logo": {
                "ui:help": "Es muy recomendable que subas el logo de tu empresa"
            }
        }
    }
        
    return (             
        <div className="row mb-5">
            <div className="col-md-12 mt-4">
                <div className="text-right">
                    <button type="button" className="btn btn-primary mr-2">1. Crea anuncio</button>
                    <button type="button" className="btn btn-light mr-2">2. Preview</button>
                    <button type="button" className="btn btn-light mr-2">3. Publica</button>
                </div>
            </div>
            <div className="col-md-12 mt-4">
                <p className="job-presentation">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="col-md-12">
                <JobsForm schema={schema} uiSchema={uiSchema} transformErrors={transformErrors}/>
            </div>
        </div>
    )
}

export default Job;