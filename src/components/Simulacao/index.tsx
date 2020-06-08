import React, {useState, useCallback} from 'react';
import {Row, Col, Form, FormGroup, Button} from 'reactstrap';
// import { Container } from './styles';
import Input from "./../Input";

interface Valor {
  valor: number;
}
function Simulacao() {
  const [valor, setValor] = useState<Valor>({} as Valor);

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setValor({
        ...valor,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    },
    [valor]
  );

  return (
    <Form>
    <h6 className="heading-small text-muted mb-4">
    Simulação de empréstimo/aplicações
    </h6>
    <div className="pl-lg-4">
     
      <Row>
        <Col lg="4">
        
          <FormGroup>
          <label
              className="form-control-label"
              htmlFor="input-value"
            >
              Quanto você precisa?
            </label>
            <Input
              name="price"
              mask="currency"
              prefix="R$"
              placeholder="0,01"
              onChange={handleChange}
            />
            
          </FormGroup>
        </Col>
        <Col lg="4">
          <FormGroup>
          <Button className="my-4" color="primary" type="button">
            Simular
          </Button>
          </FormGroup>
        </Col>
        
      </Row>
    </div>
  </Form>
  );
}

export default Simulacao;