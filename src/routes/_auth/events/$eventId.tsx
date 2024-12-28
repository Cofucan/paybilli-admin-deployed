import { createFileRoute, useRouter } from '@tanstack/react-router';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useEventsGetById } from '../../../hooks/useEventQuery';
import { useState, useEffect } from 'react';

interface EventDetails {
  amount: string;
  commission: number;
  created_at: string;
  creator: {
    id: number;
    username: string;
    name: string;
    profile_image_url: string;
  };
  currency: string;
  due_date: string;
  event_id: string;
  event_name: string;
  event_type: string;
  id: number;
  is_system: boolean;
  participants: {
    condition: string;
    is_creator: boolean;
    joined_at: string;
    participant: {
      id: number;
      name: string;
      profile_image_url: string;
      username: string;
    };
    winner: boolean;
  }[];
  refund_condition: string;
  status: string;
  total_amount: number;
}

const formatCurrency = (amount: number | string, currency: string): string => {
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
  });
  return formatter.format(Number(amount));
};

const formatDate = (date: string): string => {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const Route = createFileRoute('/_auth/events/$eventId')({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();
  const { eventId } = Route.useParams();  
  const [selectedCondition, setSelectedCondition] = useState<string>('');

  const { data: eventDetails, isLoading, error } = useEventsGetById(eventId);
  const [hasError, setHasError] = useState<boolean>(false);

  console.log(eventDetails)

  useEffect(() => {
    if (error) {
      setHasError(true);
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error loading event details.</div>;
  }

  if (!eventDetails) {
    return <div>No event details available.</div>;
  }

  const {
    amount,
    commission,
    created_at,
    creator,
    currency,
    due_date,
    event_name,
    event_id,
    event_type,
    total_amount,
    participants,
  } = eventDetails as EventDetails;

  // Handle outcome condition change
  const handleConditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCondition(event.target.value);
  };

  const handleNavigation = () => {
    router.navigate({
      to: '/events',
    });
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="px-7 pt-5 lg:pt-10 xl:pt-5" >
        <button onClick={handleNavigation} className="flex items-center gap-3 text-[30px] font-semibold text-[#1D1D1D] transition hover:text-gray-800">
          <FaArrowLeftLong className="text-2xl" />
          <span>Bet Details</span>
        </button>
      </div>

      <div className="mx-auto mt-6 lg:max-w-5xl rounded-lg bg-white p-10 shadow-md">
        <div className="mb-5 grid gap-8 grid-cols-2 smd:grid-cols-3 lg:grid-cols-3">
          <div>
            <p className="text-xl font-semibold">{creator?.name}</p>
            <p className="text-base text-gray-600">Bet Placer</p>
          </div>
          <div>
            <p className="text-xl font-semibold">{formatDate(created_at)}</p>
            <p className="text-base text-gray-600">Date Created</p>
          </div>
          <div>
            <p className="text-xl font-semibold">{event_type}</p>
            <p className="text-base text-gray-600">Bet Type</p>
          </div>
          <div>
            <p className="text-xl font-semibold">{event_id}</p>
            <p className="text-base text-gray-600">Bet Id</p>
          </div>
          <div>
            <p className="text-xl font-semibold">{event_name}</p>
            <p className="text-base text-gray-600">Event Name</p>
          </div>
          <div>
            <p className="text-xl font-semibold">{formatCurrency(amount, currency)}</p>
            <p className="text-base text-gray-600">Total Bet Amount</p>
          </div>
          <div>
            <p className="text-xl font-semibold">{formatCurrency(total_amount, currency)}</p>
            <p className="text-base text-gray-600">Total Amount</p>
          </div>
          <div>
            <p className="text-xl font-semibold">{formatCurrency(commission, currency)}</p>
            <p className="text-base text-gray-600">Commission</p>
          </div>
          <div>
            <p className="text-xl font-semibold">{formatDate(due_date)}</p>
            <p className="text-base text-gray-600">Due Date</p>
          </div>
        </div>

        {/* Dropdown for selecting Outcome Condition */}
        <div className="mt-6">
          <label htmlFor="condition" className="block text-lg font-semibold text-gray-700">
            Select Outcome:
          </label>
          <select
            id="condition"
            value={selectedCondition}
            onChange={handleConditionChange}
            className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-lg"
          >
            <option value="">-- Select Condition --</option>
            {participants?.map((participant) => (
              <option key={participant.participant.id} value={participant.condition}>
                 - {participant.condition}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-10 flex justify-end gap-4 px-7">
        <button className="rounded-lg border border-light-blue-500 bg-transparent px-6 py-5 text-light-blue-500 transition">
          Confirm Loss
        </button>
        <button className="rounded-lg bg-light-blue-500 px-6 py-5 text-white transition hover:shadow-lg">
          Confirm Win
        </button>
      </div>
    </div>
  );
}
