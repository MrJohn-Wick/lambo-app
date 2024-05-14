import { UserStatus } from '@lambo/components/user/UsesStatus';
import Link from '~next/link';

const Home = ({}) => {
  return (
    <div>
      <div>
        Current user is: <UserStatus />
      </div>
      <div>
        <Link href="/login">Login</Link>
      </div>
      <div>
        #Home page
      </div>
    </div>
  );
};

export default Home;