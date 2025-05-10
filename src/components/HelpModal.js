"use client"

import { useState } from 'react';
import { CircleHelp } from 'lucide-react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

export default function HelpModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button
        isIconOnly
        color="default"
        aria-label="Help"
        onClick={openModal}
        className="absolute top-4 right-4 z-10"
      >
        <CircleHelp />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent>
          <ModalHeader className="text-xl">เพิ่ม Event ยังไง?</ModalHeader>
          <ModalBody>
            <ol className="list-decimal pl-5 mb-4">
              <li>สร้างกิจกรรมในปฏิทินของคุณ (เช่น Google Calendar, Outlook, iCloud Calendar)</li>
              <li>ส่งคำเชิญไปที่ <strong>impactpal.th@gmail.com</strong></li>
              <li>เรียบร้อย!</li>
            </ol>
            <p className="italic text-center text-gray-500 mt-4">
              **หมายเหตุ:** ไม่รับกิจกรรมประเภท Training, Private หรือ Event ที่ไม่เกี่ยวข้องกับ Social Impact
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}