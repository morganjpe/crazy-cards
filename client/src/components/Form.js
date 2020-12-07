import tw, { styled, theme } from "twin.macro";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postcodeValidator } from "postcode-validator";
import PropTypes from "prop-types";

// components
import { Button } from "./Buttons";

const Form = ({ setEligibilityCheck }) => {
  const { register, handleSubmit, errors } = useForm();

  const [expanded, setExpanded] = useState(false);

  const submit = (data) => {
    setEligibilityCheck(data);
    setExpanded(!expanded);
  };

  return (
    <>
      <Form.MobileButton
        status={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        Check my Eligibiliy
      </Form.MobileButton>
      <Form.Container mobileDisplay={expanded} onSubmit={handleSubmit(submit)}>
        <Form.Group>
          <div>
            <legend>Your Title</legend>
            <Form.Radio>
              <input
                className="visually-hidden"
                ref={register({ required: true })}
                type="radio"
                name="Title"
                id="Mr"
                value="Mr"
              />
              <label className="label-button" htmlFor="Mr">
                Mr
              </label>
            </Form.Radio>
            <Form.Radio>
              <input
                className="visually-hidden"
                ref={register({ required: true })}
                type="radio"
                name="Title"
                id="Mrs"
                value="Mrs"
              />
              <label className="label-button" htmlFor="Mrs">
                Mrs
              </label>
            </Form.Radio>
            <Form.Radio>
              <input
                className="visually-hidden"
                ref={register({ required: true })}
                type="radio"
                name="Title"
                id="Miss"
                value="Miss"
              />
              <label className="label-button" htmlFor="Miss">
                Miss
              </label>
            </Form.Radio>
            <Form.Radio>
              <input
                className="visually-hidden"
                ref={register({ required: true })}
                type="radio"
                name="Title"
                id="Ms"
                value="Ms"
              />
              <label className="label-button" htmlFor="Ms">
                Ms
              </label>
            </Form.Radio>
            <Form.Radio>
              <input
                className="visually-hidden"
                ref={register({ required: true })}
                type="radio"
                name="Title"
                id="Dr"
                value="Dr"
              />
              <label className="label-button" htmlFor="Dr">
                Dr
              </label>
            </Form.Radio>
          </div>

          {errors.Title && (
            <Form.Error role="alert">Title is required</Form.Error>
          )}
        </Form.Group>

        <Form.Group>
          <div>
            <label htmlFor="fullname">Your Full Name</label>
            <input
              ref={register({ required: true })}
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Please type your full name"
            />
          </div>
          {errors.fullname && (
            <Form.Error>Please enter your full name</Form.Error>
          )}
        </Form.Group>

        <Form.Group>
          <div>
            <legend>Date of Birth</legend>
            <Form.Date>
              <label className="visually-hidden" htmlFor="Day">
                Day
              </label>
              <input
                ref={register({ required: true, max: 31, min: 1 })}
                type="number"
                name="Day"
                id="Day"
                placeholder="DD"
              />

              <label className="visually-hidden" htmlFor="Month">
                Month
              </label>
              <input
                ref={register({ required: true, max: 12, min: 1 })}
                type="number"
                name="Month"
                id="Month"
                placeholder="MM"
              />
              <label className="visually-hidden" htmlFor="Year">
                Year
              </label>
              <input
                ref={register({
                  required: true,
                  max: new Date().getFullYear() - 18,
                  min: 1900,
                })}
                type="number"
                name="Year"
                id="Year"
                placeholder="YYYY"
              />
            </Form.Date>
          </div>
          {errors.Day && <Form.Error>Please enter a valid day</Form.Error>}
          {errors.Month && <Form.Error>Please enter a valid month</Form.Error>}
          {errors.Year && <Form.Error>Please enter a valid year</Form.Error>}
        </Form.Group>

        <Form.Group>
          <div>
            <legend>Address</legend>
            <label className="visually-hidden" htmlFor="addressLine1">
              First line of your address
            </label>
            <input
              ref={register({ required: true })}
              type="text"
              name="addressLine1"
              id="addressLine1"
              placeholder="First line of your address"
            />
            <label className="visually-hidden" htmlFor="addressLine2">
              Second line of your address
            </label>
            <input
              ref={register({ required: true })}
              type="text"
              name="addressLine2"
              id="addressLine2"
              placeholder="Second line of your address"
            />
            <label className="visually-hidden" htmlFor="postcode">
              Second line of your address
            </label>
            <input
              ref={register({
                required: true,
                validate: (data) => postcodeValidator(data, "GB"),
              })}
              type="text"
              name="postcode"
              id="postcode"
              placeholder="Postcode"
            />
          </div>
          {errors.addressLine1 && (
            <Form.Error>Please check your address</Form.Error>
          )}
          {errors.addressLine2 && (
            <Form.Error>Please check your address</Form.Error>
          )}
          {errors.postcode && (
            <Form.Error>Please check your postcode</Form.Error>
          )}
        </Form.Group>

        <Form.Group>
          <div>
            <legend>Employment Status</legend>
            <Form.Radio>
              <input
                className="visually-hidden"
                ref={register({ required: true })}
                type="radio"
                name="employmentStatus"
                id="fulltime"
                value="fulltime"
              />
              <label className="label-button" htmlFor="fulltime">
                Full Time
              </label>
            </Form.Radio>
            <Form.Radio>
              <input
                className="visually-hidden"
                ref={register({ required: true })}
                type="radio"
                name="employmentStatus"
                id="parttime"
                value="parttime"
              />
              <label className="label-button" htmlFor="parttime">
                Part Time
              </label>
            </Form.Radio>
            <Form.Radio>
              <input
                className="visually-hidden"
                ref={register({ required: true })}
                type="radio"
                name="employmentStatus"
                id="student"
                value="student"
              />
              <label className="label-button" htmlFor="student">
                Student
              </label>
            </Form.Radio>
            <Form.Radio>
              <input
                className="visually-hidden"
                ref={register({ required: true })}
                type="radio"
                name="employmentStatus"
                id="unemployed"
                value="unemployed"
              />
              <label className="label-button" htmlFor="unemployed">
                Unemployed
              </label>
            </Form.Radio>
          </div>
          {errors.employmentStatus && (
            <Form.Error>Your Employment is required</Form.Error>
          )}
        </Form.Group>

        <Form.Group>
          <label htmlFor="income">Your Annual Income (Pre Tax)</label>
          <input
            ref={register({ required: true })}
            prefix="£"
            type="number"
            id="income"
            name="income"
            placeholder="eg. £25,000"
          />
        </Form.Group>

        <Button>Submit</Button>
      </Form.Container>
    </>
  );
};

Form.propTypes = {
  setEligibilityCheck: PropTypes.func.isRequired,
};

Form.MobileButton = styled.button`
  ${tw`w-full bg-blue-100 text-blue-600 py-2 text-left border-b border-blue-400`}
  padding-left: 15px;
  position: relative;

  ::after {
    content: "${({ status }) => (status ? "-" : "+")}";
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }

  @media (min-width: ${theme`screens.lg`}) {
    display: none;
  }
`;

Form.Container = styled.form`
  display: ${({ mobileDisplay }) => (mobileDisplay ? "block" : "none")};
  ${tw`w-full lg:w-1/4 bg-white`}
  padding: 15px 15px 0 15px;

  @media (min-width: ${theme`screens.lg`}) {
    display: block;
  }
`;

Form.Group = styled.fieldset`
  ${tw` border-b border-gray-200 pb-4`}

  > div {
    ${tw`flex flex-wrap justify-between`}
  }

  legend {
    ${tw`text-base font-bold my-3 block leading-normal w-full`}
  }

  label {
    ${tw`text-base font-bold my-3 block leading-normal w-full`}
  }

  input {
    ${tw`border border-gray-300 text-gray-500 p-3 rounded w-full mb-2`}
  }

  .visually-hidden {
    ${tw`sr-only`}
  }
`;

Form.Radio = styled.div`
  width: calc((100% / 2) - 5px);

  .label-button {
    ${tw`border-gray-300 border block text-center p-3 cursor-pointer rounded text-gray-500 font-normal my-1`}
  }

  .label-button:hover {
    ${tw`border-blue-400`}
  }

  input:checked ~ .label-button {
    ${tw`border-blue-400 bg-blue-100 text-blue-600`}
  }
`;

Form.Input = styled.div`
  ${tw`pb-4 mb-4`}
`;

Form.Date = styled.div`
  ${tw`flex justify-between`}
  input[type="number"] {
    ${tw`md:w-1/3`}
  }
  input[type="number"]:nth-of-type(2) {
    ${tw`mx-2`}
  }
`;

Form.Error = styled.div`
  ${tw`p-1 my-2 text-sm text-red-800 bg-red-100 rounded`}
`;

export default Form;
