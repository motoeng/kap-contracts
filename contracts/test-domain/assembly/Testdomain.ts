import { testdomain } from "./proto/testdomain";

export class Testdomain {
  authorize_mint(
    args: testdomain.authorize_mint_arguments
  ): testdomain.authorize_mint_result {
    // const name = args.name;
    // const domain = args.domain;
    // const duration_increments = args.duration_increments;
    // const owner = args.owner;
    // const payment_from = args.payment_from;
    // const payment_token_address = args.payment_token_address;

    const res = new testdomain.authorize_mint_result();
    res.expiration = 1770429035203;
    res.grace_period_end = 1770429035204;

    return res;
  }

  authorize_burn(
    args: testdomain.authorize_burn_arguments
  ): testdomain.authorize_burn_result {
    const name = args.name;
    
    const res = new testdomain.authorize_burn_result();

    res.authorized = name!.name != 'cannot_burn.koin';

    return res;
  }

  authorize_renewal(
    args: testdomain.authorize_renewal_arguments
  ): testdomain.authorize_renewal_result {
    // const name = args.name;
    // const duration_increments = args.duration_increments;
    // const payment_from = args.payment_from;
    // const payment_token_address = args.payment_token_address;

    const res = new testdomain.authorize_renewal_result();
    res.expiration = 1770428796867;
    res.grace_period_end = 1770428796869;

    return res;
  }
}
