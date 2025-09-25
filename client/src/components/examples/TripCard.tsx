import TripCard from '../TripCard';
import { mockTrips } from '@/lib/mock-data';

export default function TripCardExample() {
  return (
    <div className="max-w-sm">
      <TripCard trip={mockTrips[0]} />
    </div>
  );
}