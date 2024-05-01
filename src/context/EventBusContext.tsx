import { createContext, ReactNode, useContext } from "react";

export type EventBusEventHandler = (payload: any) => void;

type IEventBusContext = {
  events: Map<string, Set<EventBusEventHandler>>;
  subscribe: (key: string, callback: EventBusEventHandler) => void;
  unsubscribe: (key: string, callback: EventBusEventHandler) => void;
  dispatch: (key: string, payload: any) => void;
};

const initialValue: IEventBusContext = {
  events: new Map(),
  subscribe: (key: string, callback: EventBusEventHandler) => {},
  unsubscribe: (key: string, callback: EventBusEventHandler) => {},
  dispatch: (key: string, payload: any) => {},
};

const EventBusContext = createContext<IEventBusContext>(initialValue);

const EventBusProvider = ({ children }: { children: ReactNode }) => {
  const events = new Map();

  const subscribe = (key: string, callback: EventBusEventHandler) => {
    if (!events.has(key)) {
      events.set(key, new Set());
    }

    events.get(key).add(callback);
  };

  const unsubscribe = (key: string, callback: EventBusEventHandler) => {
    if (!events.has(key)) {
      return;
    }

    events.get(key).delete(callback);

    if (events.get(key).size === 0) {
      events.delete(key);
    }
  };

  const dispatch = (key: string, payload: any) => {
    if (!events.has(key)) {
      return;
    }

    const callbacks = events.get(key);

    callbacks.forEach((callback: any) => callback(payload));
  };

  const eventBusContext: IEventBusContext = {
    events,
    subscribe,
    unsubscribe,
    dispatch,
  };

  return (
    <EventBusContext.Provider value={eventBusContext}>
      {children}
    </EventBusContext.Provider>
  );
};

const useEventBus = (): IEventBusContext => useContext(EventBusContext);

export { EventBusContext, EventBusProvider, useEventBus };
