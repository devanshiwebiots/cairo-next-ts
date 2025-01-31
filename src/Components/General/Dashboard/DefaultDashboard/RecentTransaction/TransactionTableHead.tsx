import { Input, Label } from "reactstrap";

export const TransactionTableHead = () => {
  return (
    <thead>
      <tr>
        <th>
          <div className="form-check">
            <Input type="checkbox" />
            <Label check></Label>
          </div>
        </th>
        <th>Name</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};
