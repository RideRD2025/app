const ProviderCalendar = ({ bookings }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const totalDays = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
    
    const days = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Actual days of the month
    for (let day = 1; day <= totalDays; day++) {
      const dateStr = `${year}-${month + 1}-${day}`;
      const hasBooking = bookings.some(b => b.date === dateStr);
      
      days.push(
        <div 
          key={day} 
          className={`h-12 border flex items-center justify-center ${hasBooking ? 'bg-red-100' : ''}`}
        >
          {day}
          {hasBooking && <div className="w-2 h-2 bg-red-500 rounded-full absolute bottom-1"></div>}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          &lt;
        </button>
        <h3 className="font-semibold">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <button 
          onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
          <div key={day} className="font-medium text-gray-500 text-sm py-1">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default ProviderCalendar;