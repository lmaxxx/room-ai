import ResponseDialog from "@/components/response-dialog";
import AgentForm from "@/modules/agents/ui/components/agent-form";

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function NewAgentDialog({open, onOpenChange}: Props) {
  return (
    <ResponseDialog
      title={"New Agent"}
      description={"Create a new agent"}
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
      />
    </ResponseDialog>
  );
}
