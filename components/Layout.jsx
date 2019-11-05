import React, { Component } from 'react';
import { PlusCircle, MinusCircle } from 'react-feather';
import { increment, decrement } from 'dredux/modules/counter';
import { connect } from 'react-redux';
import Link from 'next/link';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const {
      increment, decrement, count: { total }, children,
    } = this.props;

    return (
      <div className="bg-teal-300 w-screen h-screen">
        <div className="pt-32 px-32">
          <div className="w-1/4 mx-auto flex justify-between text-lg text-white py-2">
            <Link href="/">
              <button
                type="button"
                className="bg-red-300 px-4 py-2 shadow font-medium focus:outline-none"
              >
              Index
              </button>
            </Link>
            <Link href="/route">
              <button
                type="button"
                className="bg-red-300 px-4 py-2 shadow font-medium focus:outline-none"
              >
              Route
              </button>
            </Link>
          </div>

        </div>

        <div className="px-32">
          <div className="w-1/4 mx-auto text-4xl text-white font-bold shadow-lg bg-red-300 px-5 py-2">
            {children}
          </div>
          <div className="shadow-lg w-1/4 flex justify-center mx-auto bg-gray-300 p-10 items-center">
            <button
              type="button"
              onClick={increment}
              className="text-teal-500 mr-10 focus:outline-none"
            >
              <PlusCircle className="h-10 w-10" />
            </button>
            <span className="text-4xl font-medium text-gray-700">
              {total}
            </span>
            <button
              type="button"
              onClick={decrement}
              className="text-teal-500 ml-10 focus:outline-none"
            >
              <MinusCircle className="h-10 w-10" />
            </button>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({ count }) => ({ count });

export default connect(
  mapStateToProps,
  { increment, decrement },
)(Layout);
