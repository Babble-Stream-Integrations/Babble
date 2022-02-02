import React from 'react';

import { Row, Form } from 'react-bootstrap';

function RaffleSettingsOption2() {
    return (
        <>
            <Row>
                <div className="addon-settings-title-text">
                    Message to enter
                </div>
            </Row>
            <Row className="addon-settings-margin">
                <Form>
                    <Form.Control className="addon-settings-form-input-large" />
                </Form>
            </Row>
        </>
    )
}

export default RaffleSettingsOption2
