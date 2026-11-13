//! Type assertion

//* "as" syntax

type Status = "pending" | "approved" | "rejected";

const sameStatus: string = "approved";

const showStatus = (status: Status) => {
  console.log("Your current status is " + status);
};

showStatus(sameStatus as Status);

//* non-null assertion

interface Congif {
  port?: number;
}

const config: Congif = {
  port: 40000,
};

const currentPort: number = config.port!;
// const currentPort: number = config.port as number;

console.log(currentPort);

//* constant assertion

const configuration = {
  port: 8880,
  prefix: "/api/v2",
} as const;

// configuration.port = 40000;
