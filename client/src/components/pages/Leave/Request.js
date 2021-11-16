import { useState } from "react";
import { Button, Card, Image, Message, Icon } from "semantic-ui-react";


const Request = ({
    _id,
    employee,
    type,
    data,
    status,
    resolved_by,
    disabled = false,
    showDeleteOption = false
}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [deleteMessage, setDeleteMessage] = useState(null);




    return (
        <Card color="grey">
            {showDeleteOption ?
                <>
                    {
                        deleteMessage ?
                            <Message>{deleteMessage}</Message> :
                            null
                    }
                    <Card.Content extra textAlign="right">
                        Delete the request <Icon name="trash" loading={loading} style={{ cursor: "pointer" }} onClick={deleteRequestHandler} />
                    </Card.Content>
                </>
                :
                null
            }
            <Card.Content>
                <Image floated="right" size="mini" src={employee?.img} />
                <Card.Header>{employee?.name}</Card.Header>
                <Card.Meta>{type} request</Card.Meta>
                <Card.Description>

                    <br />
                    {data.message}
                </Card.Description>
            </Card.Content>
            {status === "pending" ? (
                <Card.Content extra>
                    <div className="ui two buttons">
                        <Button
                            basic
                            color="green"
                            onClick={onClickHandler}
                            name="approved"
                            disabled={disabled}
                        >
                            Approve
                        </Button>
                        <Button
                            basic
                            color="red"
                            onClick={onClickHandler}
                            name="rejected"
                            disabled={disabled}
                        >
                            Decline
                        </Button>
                    </div>
                    {/* success or error based on server response */}
                    {error ? (
                        <Message error size="mini">
                            <p>{error}</p>
                        </Message>
                    ) : null}
                    {success ? (
                        <Message success size="mini">
                            <p>{success}</p>
                        </Message>
                    ) : null}
                </Card.Content>
            ) : (
                <Card.Content extra>
                    <Image floated="right" size="mini" avatar src={resolved_by.img} />
                    <p>resolved by </p>

                    <Message color={status === "approved" ? "green" : "red"} size="mini">
                        <p>request has been </p>
                    </Message>
                </Card.Content>
            )}

        </Card>
    );
};

export default Request;
