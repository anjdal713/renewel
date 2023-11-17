// App.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from './header';
import Background from './Background';
import Footer from './footer';
import './App.css';
import { motion, AnimatePresence } from 'framer-motion';


const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '8px',
  cursor: 'pointer',
  background: '#fff',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '8px',
  right: '8px',
  cursor: 'pointer',
};

function App() {
  const items = [
    { id: 1, subtitle: 'Mobile Software', title: '모바일 소프트웨어 트랙' },
    { id: 2, subtitle: 'Web Engineering', title: '웹 공학 트랙' },
    { id: 3, subtitle: 'Big Data', title: '빅 데이터 트랙' },
    { id: 4, subtitle: 'Digital Contents & Virtual Reality', title: '디지털 콘텐츠 및 가상현실 트랙' },
  ];

  const [selectedId, setSelectedId] = useState(null);


  return (
    <>
      <Header />
      <Background />

      <div>
      <header>
        <h1>Department of Computer Science</h1>
      </header>

      <main>
        <section>
          <h2>Welcome to the Department of Computer Science</h2>
          <p>
            The Department of Computer Science offers undergraduate and graduate degrees in Computer Science and related fields. Our research areas include Artificial Intelligence, Data Science, Software Engineering, and Networking. We are proud of our exceptional faculty and their dedication to student success.
          </p>
        </section>

        <motion.div className="bg-purple-600 flex items-center justify-center h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <motion.div
            className={`card bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
              selectedId === item.id ? 'card-selected' : ''
            }`}
            layoutId={`card-container-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            key={item.id}
            initial={{ scale: 1 }}
            animate={{ scale: selectedId === item.id ? 1.1 : 1 }} // Increase scale on selected card
            transition={{ duration: 0.3 }}
          >
            <div className="card-content">
              <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{item.title}</motion.h2>
              <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{item.subtitle}</motion.h5>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {items.map((item) => (
              item.id === selectedId && (
                <motion.div
                  className="bg-white rounded-lg p-4 shadow-md max-w-lg"
                  layoutId={`card-container-${item.id}`}
                  key={item.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <motion.div className="relative">
                    <motion.button
                      className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                      onClick={() => setSelectedId('')}
                    >
                      Close
                    </motion.button>
                    <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{item.title}</motion.h2>
                    <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{item.subtitle}</motion.h5>
                    <motion.p className="text-md text-gray-700 mb-4">{item.description}</motion.p>
                    <motion.p
                      className="text-md text-gray-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Additional content can go here!
                    </motion.p>
                  </motion.div>
                </motion.div>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>

      </main>
    </div>

      <Footer />
    </>
  );
}

export default App;
