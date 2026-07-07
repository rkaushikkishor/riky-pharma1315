import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { CreditCard, Banknote, Smartphone, Download, Printer, CheckCircle } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Order } from '../App';
import logoImage from '../../imports/Screenshot_2026-04-05_232705.png';
import {
  springs,
  btnHover,
  btnTap,
  staggerContainer,
  staggerItem,
  modalVariants,
} from '../utils/motionConfig';

interface PaymentPageProps {
  order: Order;
  onClearCart: () => void;
}

type PaymentMethod = 'upi' | 'cash' | 'card';

const paymentMethods: {
  id: PaymentMethod;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  activeColor: string;
  activeBg: string;
  activeBorder: string;
}[] = [
  {
    id: 'upi',
    label: 'UPI Payment',
    sublabel: 'Scan QR code to pay instantly',
    icon: Smartphone,
    activeColor: 'text-blue-600',
    activeBg: 'bg-blue-600',
    activeBorder: 'border-blue-500',
  },
  {
    id: 'cash',
    label: 'Cash Payment',
    sublabel: 'Pay at the counter',
    icon: Banknote,
    activeColor: 'text-green-600',
    activeBg: 'bg-green-600',
    activeBorder: 'border-green-500',
  },
  {
    id: 'card',
    label: 'Card Payment',
    sublabel: 'Debit / Credit card',
    icon: CreditCard,
    activeColor: 'text-purple-600',
    activeBg: 'bg-purple-600',
    activeBorder: 'border-purple-500',
  },
];

export default function PaymentPage({ order, onClearCart }: PaymentPageProps) {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('upi');
  const [confirming, setConfirming] = useState(false);
  const billRef = useRef<HTMLDivElement>(null);

  const upiId = 'crramkumar1976-2@okicici';
  const upiString = `upi://pay?pa=${upiId}&pn=Riky Pharma&am=${order.total.toFixed(2)}&cu=INR`;

  const handlePaymentComplete = async () => {
    setConfirming(true);
    await new Promise(r => setTimeout(r, 600));
    onClearCart();
    navigate('/success');
  };

  const downloadBillAsPDF = async () => {
    if (!billRef.current) return;
    const canvas = await html2canvas(billRef.current, { scale: 2, backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Riky_Pharma_Bill_${order.billNumber}.pdf`);
  };

  return (
    <div className="size-full min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springs.snappy}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-1">Payment & Bill</h1>
          <p className="text-gray-400 text-sm font-mono">Bill #{order.billNumber}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bill Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springs.gentle, delay: 0.1 }}
          >
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/30">
              {/* Bill Content */}
              <div ref={billRef} className="p-8 bg-white">
                {/* Header */}
                <div className="text-center mb-6 pb-6 border-b-2 border-gray-100">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <img src={logoImage} alt="Riky Pharma Logo" className="w-12 h-12 object-contain" />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">Riky Pharma</h2>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Owned by B. Indumathi Ramkumar</p>
                  <p className="text-xs text-gray-500">Tamil Sangam Road, Maninagaram, Madurai, TN - 625001</p>
                  <p className="text-xs text-gray-500">Ph: 9789555188 | rikyfamily1@gmail.com</p>
                </div>

                {/* Bill Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  {[
                    { label: 'Bill Number', value: order.billNumber },
                    { label: 'Date & Time', value: new Date(order.date).toLocaleString('en-IN') },
                    { label: 'Customer Name', value: order.user.name },
                    { label: 'Mobile', value: order.user.mobile },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-gray-400 text-xs">{label}</p>
                      <p className="font-semibold text-gray-800 text-sm">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Items Table */}
                <div className="mb-6">
                  <table className="w-full text-sm">
                    <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                      <tr>
                        <th className="py-2 px-3 text-left text-xs">#</th>
                        <th className="py-2 px-3 text-left text-xs">Product</th>
                        <th className="py-2 px-3 text-center text-xs">Qty</th>
                        <th className="py-2 px-3 text-right text-xs">Price</th>
                        <th className="py-2 px-3 text-right text-xs">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, index) => (
                        <tr key={item.id} className="border-b border-gray-100">
                          <td className="py-2.5 px-3 text-gray-500 text-xs">{index + 1}</td>
                          <td className="py-2.5 px-3">
                            <div className="font-semibold text-gray-800 text-xs">{item.name}</div>
                            <div className="text-gray-400 text-xs">{item.composition}</div>
                          </td>
                          <td className="py-2.5 px-3 text-center font-semibold text-sm">{item.quantity}</td>
                          <td className="py-2.5 px-3 text-right text-sm">₹{item.mrp.toFixed(2)}</td>
                          <td className="py-2.5 px-3 text-right font-semibold text-sm">
                            ₹{(item.mrp * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Totals */}
                <div className="border-t-2 border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Total Items</span>
                    <span className="font-semibold">{order.items.reduce((s, i) => s + i.quantity, 0)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Tax (Included)</span>
                    <span className="font-semibold">₹0.00</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-800 pt-2 border-t border-gray-200">
                    <span>Grand Total</span>
                    <span className="text-green-600">₹{order.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 text-center text-xs text-gray-400">
                  <p>Thank you for choosing Riky Pharma!</p>
                  <p className="mt-0.5">For queries: 9789555188</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 bg-gradient-to-br from-blue-50 to-green-50 flex gap-3">
                <motion.button
                  whileHover={btnHover}
                  whileTap={btnTap}
                  onClick={downloadBillAsPDF}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:bg-blue-700 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </motion.button>
                <motion.button
                  whileHover={btnHover}
                  whileTap={btnTap}
                  onClick={() => window.print()}
                  className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:bg-green-700 transition-all"
                >
                  <Printer className="w-4 h-4" />
                  Print
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Payment Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springs.gentle, delay: 0.2 }}
          >
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/30">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Select Payment Method</h2>

              {/* Payment method selector */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-3 mb-8"
              >
                {paymentMethods.map(method => {
                  const Icon = method.icon;
                  const isActive = selectedPayment === method.id;
                  return (
                    <motion.button
                      key={method.id}
                      variants={staggerItem}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 relative overflow-hidden ${
                        isActive
                          ? `${method.activeBorder} bg-white shadow-md`
                          : 'border-gray-200 hover:border-gray-300 bg-white/50'
                      }`}
                    >
                      {/* Active indicator line */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            key="line"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            exit={{ scaleY: 0 }}
                            className={`absolute left-0 top-0 bottom-0 w-1 ${method.activeBg} rounded-l-xl origin-center`}
                          />
                        )}
                      </AnimatePresence>

                      <motion.div
                        animate={{
                          backgroundColor: isActive ? '' : 'rgb(229 231 235)',
                        }}
                        className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isActive ? method.activeBg : 'bg-gray-200'
                        }`}
                        transition={springs.swift}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                      </motion.div>

                      <div className="flex-1 text-left">
                        <p className="font-semibold text-gray-800 text-sm">{method.label}</p>
                        <p className="text-gray-400 text-xs">{method.sublabel}</p>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={springs.bouncy}
                            className={`w-5 h-5 rounded-full border-2 ${method.activeBorder} flex items-center justify-center`}
                          >
                            <div className={`w-2.5 h-2.5 rounded-full ${method.activeBg}`} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* Payment Detail Panel */}
              <AnimatePresence mode="wait">
                {selectedPayment === 'upi' && (
                  <motion.div
                    key="upi"
                    variants={modalVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 text-center border border-blue-100"
                  >
                    <h3 className="font-semibold text-gray-700 mb-4 text-sm">Scan to Pay</h3>
                    <div className="bg-white p-4 rounded-xl shadow-md w-fit mx-auto">
                      <QRCodeSVG value={upiString} size={180} level="H" />
                    </div>
                    <p className="text-gray-500 text-xs mt-3 font-mono">{upiId}</p>
                    <p className="text-blue-600 text-2xl font-bold mt-1">₹{order.total.toFixed(2)}</p>
                  </motion.div>
                )}
                {selectedPayment === 'cash' && (
                  <motion.div
                    key="cash"
                    variants={modalVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-6 text-center border border-green-100"
                  >
                    <motion.div
                      animate={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <Banknote className="w-14 h-14 text-green-500 mx-auto mb-3" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-700 mb-1 text-sm">Cash Payment</h3>
                    <p className="text-gray-400 text-xs mb-3">Amount to pay at counter</p>
                    <p className="text-green-600 text-2xl font-bold">₹{order.total.toFixed(2)}</p>
                  </motion.div>
                )}
                {selectedPayment === 'card' && (
                  <motion.div
                    key="card"
                    variants={modalVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 mb-6 text-center border border-purple-100"
                  >
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <CreditCard className="w-14 h-14 text-purple-500 mx-auto mb-3" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-700 mb-1 text-sm">Card Payment</h3>
                    <p className="text-gray-400 text-xs mb-3">Swipe or insert your card</p>
                    <p className="text-purple-600 text-2xl font-bold">₹{order.total.toFixed(2)}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Confirm button */}
              <motion.button
                whileHover={!confirming ? btnHover : {}}
                whileTap={!confirming ? btnTap : {}}
                disabled={confirming}
                onClick={handlePaymentComplete}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow text-base flex items-center justify-center gap-2 relative overflow-hidden disabled:opacity-80"
              >
                <AnimatePresence mode="wait">
                  {confirming ? (
                    <motion.span
                      key="confirming"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Confirming…
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Confirm Payment
                    </motion.span>
                  )}
                </AnimatePresence>
                <motion.div
                  className="absolute inset-0 bg-white/15 skew-x-12 -translate-x-full"
                  whileHover={{ translateX: '200%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
