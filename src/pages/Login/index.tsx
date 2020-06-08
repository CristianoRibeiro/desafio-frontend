import React, { useState, Component} from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Container,
} from "reactstrap";


import { FiLock, FiMail } from 'react-icons/fi';


import './styles.css';


function Login(props: any){
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn (e: any) {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Preencha e-mail e senha para continuar!");
    } else {
      try {
        props.history.push("/atendimento");
      } catch (err) {
        setError(
          
            "Houve um problema com o login, verifique suas credenciais. T.T"
        );
      }
    }
  };

  return (
    <>
      
      <Container>

        <Col lg="5" md="7">
          <Card className="bg-white shadow border-0">
            <CardHeader>
            <h5 className="heading-small d-flex justify-content-center text-muted  center">
               Finanças
            </h5>           
            {error && <p>{error}</p>} 
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">

              <Form role="form" onSubmit={handleSignIn}>
                <FormGroup className="mb-3">
                 

                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <FiMail />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" autoComplete="new-email" 
                     onChange={e => setEmail( e.target.value )}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <FiLock/>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Senha" type="password"  autoComplete="new-password" 
                    onChange={e => setPassword( e.target.value)} />                  
                    </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Lembrar senha</span>
                  </label>
                </div>
                <div className="text-center">
                  <button type="submit" className="my-4 btn btn-primary" color="primary">
                    Entrar
                  </button>
                </div>
              </Form>
            </CardBody>
          </Card>
          
        </Col>
        </Container>
      </>
  );
}

export default Login;