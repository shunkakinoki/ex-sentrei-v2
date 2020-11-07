import Link from "next/link";

export default function LandingFaq(): JSX.Element {
  return (
    <section className="container max-w-screen-xl px-4 py-24 mx-auto">
      <div className="lg:text-center">
        <p className="text-base font-semibold leading-6 tracking-wide text-pink-600 uppercase">
          FAQ
        </p>
        <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Frequently Asked Questions
        </h3>
        <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
          Feel free to ask us about anything!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-0 text-gray-700 md:grid-cols-2 md:gap-16">
        <div>
          <h5 className="mt-10 mb-3 font-semibold text-gray-900">
            What is Sentrei?
          </h5>
          <p className="text-base leading-6 text-gray-500">
            Sentrei is a writing platform that devotes itself to being not evil,
            and being fair to both readers and writers.
          </p>
          <h5 className="mt-10 mb-3 font-semibold text-gray-900">
            Is Sentrei really free forever?
          </h5>
          <p className="text-base leading-6 text-gray-500">
            Yes. We believe the internet deserves an uncontaminated place to
            host and deliver content, while providing the best possible
            experience for readers.
          </p>
          <h5 className="mt-10 mb-3 font-semibold text-gray-900">
            Is there a discount for Startups and Colleges?
          </h5>
          <p className="text-base leading-6 text-gray-500">
            Yes. We are a small startup too, and we would love to be with you on
            this journey. There is a $10/month plan for startups and educational
            institutions. Please contact{" "}
            <Link href="/support">
              <a className="underline">support</a>
            </Link>{" "}
            for further information.
          </p>
          <h5 className="mt-10 mb-3 font-semibold text-gray-900">
            Is there a catch for &quot;zero commissions&quot; policy on
            purchases?
          </h5>
          <p className="text-base leading-6 text-gray-500">
            Technically, yes. We use Stripe to process payments, so Stripe will
            have a 3.6% commission fee on paywalls. However, unlike many
            publishing platforms, the rest will be in your pocket, as Sentrei
            takes no commissions.
          </p>
          <h5 className="mt-10 mb-3 font-semibold text-gray-900">
            Is Sentrei free for open-source?
          </h5>
          <p className="text-base leading-6 text-gray-500">
            Yes. No strings attached. Free forever.
          </p>
        </div>
        <div>
          <h5 className="mt-10 mb-3 font-semibold text-gray-900">
            Why Sentrei?
          </h5>
          <p className="text-base leading-6 text-gray-500">
            We dedicate ourselves to being fair to our customers. We do not
            charge platform commissions on purchases. We do not show anything
            that gets in the way of a great reading experience. We believe that
            the internet deserves much more than what is the status as of now in
            2020.
          </p>
          <h5 className="mt-10 mb-3 font-semibold text-gray-900">
            Can I self-host Sentrei?
          </h5>
          <p className="text-base leading-6 text-gray-500">
            Currently not. Planning to go public as an open-source in the
            future.
          </p>
          <h5 className="mt-10 mb-3 font-semibold text-gray-900">
            Can I cancel the plan at any time?
          </h5>
          <p className="text-base leading-6 text-gray-500">
            It will be a sad day for our team, and we would do whatever it takes
            to make you our happiest customer. But if you still insist, you can.
          </p>
          <h5 className="mt-10 mb-3 font-semibold text-gray-900">
            Do the subscriptions renew automatically?
          </h5>
          <p className="text-base leading-6 text-gray-500">
            Yes. The billing happens every month automagically. You will receive
            a renewal notice three days before the actual renewal happens.
          </p>
          <h5 className="mt-10 mb-3 font-semibold text-gray-900">
            How do I contact support for more information?
          </h5>
          <p className="text-base leading-6 text-gray-500">
            There are multiple support channels for us. If you prefer email,
            please write to shunkakinoki@sentrei.com. If you prefer chat
            support, please visit{" "}
            <Link href="/support">
              <a className="underline">here</a>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
