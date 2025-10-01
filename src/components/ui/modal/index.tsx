import { FC, useState, useEffect } from "react";
import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Text from "@/components/ui/text";
import { SizeVariants } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/button";

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  toggleFn: () => void;
  heading?: string;
  size?: SizeVariants;
  className?: string;
  contentCustomStyle?: string;
  stickyCloseText?: string;
}

const Modal: FC<ModalProps> = ({
  open,
  children,
  toggleFn,
  heading,
  size = "sm",
  className,
  contentCustomStyle,
  stickyCloseText,
}) => {
  const sizeClasses: Record<SizeVariants, string> = {
    sm: "min-h-[60vh] max-w-[512px] w-screen",
    md: "w-screen h-screen max-h-[68vw] max-w-[68vh]",
    lg: "w-screen max-w-[70vw] h-screen max-h-[70vh]",
    xl: "w-screen max-w-[80vw] h-screen max-h-[80vh]",
  };

  const [inopen, setInOpen] = useState(open);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        toggleFn();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, toggleFn]);

  return (
    <AnimatePresence>
      {open && (
        <div
          className={clsx("relative z-50", className)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={heading ? "modal-heading" : undefined}
        >
          {/* Backdrop with smooth fade transition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 backdrop-blur-lg bg-opacity-75 bg-transparent"
          />

          <div className="fixed inset-0 z-10 w-screen">
            <div
              onClick={() => {
                console.log("in open value: ", inopen);
                setInOpen(!inopen);
                toggleFn();
              }}
              className="flex h-screen items-end justify-center text-center sm:items-center sm:p-0"
            >
              {/* Modal content with smooth scale and translate transitions */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                  scale: 0.95,
                  // Mobile slide up from bottom
                  ...(window.innerWidth < 640 && { y: "200%" }),
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 16,
                  scale: 0.95,
                  // Mobile slide down to bottom
                  ...(window.innerWidth < 640 && { y: "200%" }),
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                }}
                className={clsx(
                  `relative max-h-[90vh] w-full sm:my-auto sm:w-fit transform rounded-t-3xl
                  sm:rounded-3xl overflow-hidden max-w-screen overflow-y-auto bg-whit
                  --dark:bg-gray-800 text-left shadow-xl flex flex-col gap-4 mx-auto`
                )}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-white">
                  <div
                    className="hidden h-2 my-6 sm:hidden w-24 bg-gray-300 --dark:bg-gray-700 rounded-full border mx-auto cursor-pointer"
                    onClick={toggleFn}
                  ></div>
                  <div className="sticky top-0 text-center w-full justify-between bg-white">
                    <div className="hidden py-6 me-4 sm:flex items-center place-content-end">
                      <button
                        type="button"
                        className="rounded-full hover:bg-gray-100 top-0 bottom-0 right-4 bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                        onClick={toggleFn}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    {heading && <Text variant="section" text={"heading"} />}
                    <div className="border-t border-gray-200 w-full max-h-[70vh]" />
                  </div>
                  <div
                    className={clsx(
                      "flex flex-col overflow-y-auto gap-4mt-8 mb-24 sm:mb-0 px-4 sm:px-8 mx-auto sm:pb-8 h-fit max-h-[80vh]",
                      sizeClasses[size],
                      contentCustomStyle
                    )}
                  >
                    {children}
                  </div>
                  {stickyCloseText && (
                    <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
                      <Button
                        onClick={toggleFn}
                        className="w-full mt-6"
                        type="button"
                        size={"sm"}
                        variant={"primary"}
                      >
                        {stickyCloseText}
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
