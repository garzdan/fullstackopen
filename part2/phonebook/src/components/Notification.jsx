const Notification = ({ message, isError }) => {
  const notificationStyle = {
    color: isError ? 'red' : 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  return message && (
    <div style={notificationStyle}>{message}</div>
  );
}

export { Notification };