import React, { useState } from 'react'
import { Row, Form } from 'react-bootstrap'

function RaffleSettingsOption3() {
    const [show, setShow] = useState(true);
    return (
        <>
            <Row>
                <div className="addon-settings-title-text">
                    Subscribers only mode
                </div>
            </Row>
            <Row className="addon-settings-margin">
                <Form>
                    <Form.Switch className="addon-settings-title-subtext addon-settings-switch"
                        onClick={() => setShow(!show)}
                        label={show ? 'off' : 'on'}
                        id="custom-switch"
                    />
                </Form>
            </Row>
        </>
    )
}

export default RaffleSettingsOption3
