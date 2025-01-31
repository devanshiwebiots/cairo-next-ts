import { CardNumber, CardNumberPlaceholder, Currency, CurrencyPlaceholder, DefaultInputMask, Delimiter, DelimiterPlaceholder, PhoneNumber, PhoneNumberPlaceholder, Prefix, PrefixPlaceholder, Tailprefix, TailprefixPlaceholder } from '@/Constant';
import { NumeralThousandsGroupStyleType } from "cleave.js/options";
import { Fragment } from 'react';
import { Col, Form, Label, Row } from 'reactstrap';
import CleaveInput from './CleaveInput';

const DefaultInputMaskForm = () => {
    const currencyOptions = {
        numeral: true,
        numeralThousandsGroupStyle: "thousand" as NumeralThousandsGroupStyleType,
      };
    
      const prefixOptions = {
        prefix: "PREFIX",
        delimiter: "-",
        blocks: [6, 4, 4, 4],
        uppercase: true,
      };
    
      const delimiterOptions = {
        delimiters: [".", ".", "-"],
        blocks: [3, 3, 3],
        uppercase: true,
      };
    
      const cardNumberOptions = {
        creditCard: true,
      };
  return (
   <Fragment>
    <div className='card-wrapper border rounded-3  checkbox-checked'>
        <h6 className='sub-title'>{DefaultInputMask}</h6>
        <Form>
            <Row className='g-3'>
                <Col xxl='4' sm='6'>
                    <Label className='col-form-label' htmlFor='cleave-number-format'>{Currency}</Label>
                    <CleaveInput className='form-control' options={currencyOptions} placeholder={CurrencyPlaceholder}/>
                </Col>
                <Col xxl='4' sm='6'>
                    <Label className='col-form-label' htmlFor='cleave-type-prefix'>{Prefix}</Label>
                    <CleaveInput className='form-control' options={prefixOptions} placeholder={PrefixPlaceholder}/>
                </Col>
                <Col xxl='4' sm='6'>
                    <Label className='col-form-label' htmlFor='cleave-type-delimiter'>{Delimiter}</Label>
                    <CleaveInput className='form-control' options={delimiterOptions} placeholder={DelimiterPlaceholder}/>
                </Col>
                <Col xxl='4' sm='6'>
                    <Label>{PhoneNumber}</Label>
                    <input className="form-control" id="cleave-phone-number" type="text" placeholder={PhoneNumberPlaceholder} />
                </Col>
                <Col xxl='4' sm='6'>
                    <Label>{CardNumber}</Label>
                    <CleaveInput className="form-control" options={cardNumberOptions} placeholder={CardNumberPlaceholder}/>
                </Col>
                <Col xxl="4" sm="6">
                   <Label>{Tailprefix}</Label>
                  <input className="form-control" id="tailprefix" type="text" placeholder={TailprefixPlaceholder} />
                </Col>
            </Row>
        </Form>
    </div>
   </Fragment>
  )
}

export default DefaultInputMaskForm
